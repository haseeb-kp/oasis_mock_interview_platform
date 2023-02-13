from rest_framework import generics
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .serializers import UserSerializer, UserSerializerWithToken
from django.contrib.auth.hashers import make_password
from rest_framework import status

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

User = get_user_model()


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    '''
    TokenObtainPairSerializer is used to generate token pairs (access and refresh tokens) when a user logs in.
    The validate method in this class overrides the parent class' validate method.
    '''
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    '''
    TokenObtainPairView handles the token generation and validation process. The serializer_class attribute is set
    to MyTokenObtainPairSerializer,so that it uses the custom serializer instead of the built-in one.
    '''
    serializer_class = MyTokenObtainPairSerializer

class UserList(generics.ListAPIView):
    # permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserSerializer