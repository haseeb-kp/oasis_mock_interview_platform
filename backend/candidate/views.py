from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from .serializers import CandidateSerializer, CandidateSerializerWithToken
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.db import IntegrityError
from django.core.exceptions import ValidationError
from .models import *
from helpers.custom_backend import CustomModelBackend



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    class Meta:
        ref_name = "CandidateTokenObtainPair"
        
    '''
    generate token pairs (access and refresh tokens) when a user logs in.
    '''
    def validate(self, attrs):
        '''
        function to add the token data to the response data.
        overrides parent validate method

        return : token merged with response data
        '''
        data = super().validate(attrs)
        serializer = CandidateSerializerWithToken(self.user)
        data.update(serializer.data)
        return data


class MyTokenObtainPairView(TokenObtainPairView):
    '''
    Handles the token generation and validation process. The serializer_class attribute is set
    to MyTokenObtainPairSerializer,so that it uses the custom serializer instead of the built-in one.
    '''
    serializer_class = MyTokenObtainPairSerializer
    authentication_classes = []

    def post(self, request, *args, **kwargs):
        '''
        specify a custom authentication backend for a specific view in DRF,
        since different authentication backends are used
        '''
        self.authentication_classes = [CustomModelBackend]
        return super().post(request, *args, **kwargs)


class UserList(ListAPIView):
    # permission_classes = [IsAdminUser]
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer

class Signup(CreateAPIView):
    permission_classes = [AllowAny]
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        try:
            user = Candidate.objects.create(
                name = data['name'],
                email = data['email'],
                phone_number = data['phone_number'],
                password = make_password(data['password'])
            )
            serializer = CandidateSerializer(user, many=False)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except IntegrityError:
            message = {'detail': 'Email address already exists'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
        except ValidationError as e:
            message = {'detail': str(e)}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)