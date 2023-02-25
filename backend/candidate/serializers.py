from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.tokens import RefreshToken



class candidate_serializer(serializers.ModelSerializer):

    class Meta:
        model = Candidate
        fields = ['id', 'email', 'name', 'phone_number','password']

    

class candidate_serializer_with_token(candidate_serializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Candidate
        fields = ['id', 'email', 'first_name', 'phone_number', 'token']

    def get_token(self, obj):
        print("guyguyg")
        token = RefreshToken.for_user(obj)
        print(token)
        return str(token.access_token)