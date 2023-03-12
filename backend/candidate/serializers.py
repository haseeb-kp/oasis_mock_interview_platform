from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.tokens import RefreshToken



class CandidateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Candidate
        fields = ['id', 'email', 'name', 'phone_number','password','is_candidate']

    

class CandidateSerializerWithToken(CandidateSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Candidate
        fields = ['id', 'email', 'name', 'phone_number', 'token','is_candidate']



    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)