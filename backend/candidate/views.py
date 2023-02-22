from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from .serializers import UserSerializer, UserSerializerWithToken
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework.response import Response
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
        for key, value in serializer.items():
            data[key] = value
        return data


class MyTokenObtainPairView(TokenObtainPairView):
    '''
    TokenObtainPairView handles the token generation and validation process. The serializer_class attribute is set
    to MyTokenObtainPairSerializer,so that it uses the custom serializer instead of the built-in one.
    '''
    serializer_class = MyTokenObtainPairSerializer

class UserList(ListAPIView):
    # permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class signup(CreateAPIView):
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        try:
            user = User.objects.create(
                first_name = data['first_name'],
                email = data['email'],
                phone_number = data['phone_number'],
                password = make_password(data['password'])
            )
            serializer = UserSerializer(user, many=False)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except:
            message = {'detail': 'email taken'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)