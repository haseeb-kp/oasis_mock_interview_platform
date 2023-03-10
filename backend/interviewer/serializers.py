from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.tokens import RefreshToken



class InterviewerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Interviewer
        fields = ['id', 'email', 'name','linkedin_id', 'phone_number','password']


    

class InterviewerSerializerWithToken(InterviewerSerializer):

    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Interviewer
        fields = ['id', 'email', 'name','linkedin_id', 'phone_number', 'token']



    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)