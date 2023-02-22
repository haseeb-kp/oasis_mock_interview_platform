from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth import get_user_model
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'email','first_name', 'name', 'phone_number','password']

    def get_name(self,obj):
        name = obj.first_name
        if name=='':
            name = obj.email

        return name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'phone_number', 'is_staff', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)