from django.contrib.auth.backends import BaseBackend
from interviewer.models import Interviewer
from rest_framework.exceptions import AuthenticationFailed

class InterviewerModelBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        print("enterd in interviewer")
        try:
            interviewer = Interviewer.objects.get(email=username)
            if interviewer.check_password(password):
                return interviewer
        except Interviewer.DoesNotExist:
            raise AuthenticationFailed('Invalid email or password')
            

        return None
