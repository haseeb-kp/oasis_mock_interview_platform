from django.contrib.auth.backends import BaseBackend
from candidate.models import Candidate
from interviewer.models import Interviewer

class CustomModelBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            print("entered to candidate")
            candidate = Candidate.objects.get(email=username)
            if candidate.check_password(password):
                return candidate
        except Candidate.DoesNotExist:
            pass

        try:
            interviewer = Interviewer.objects.get(email=username)
            if interviewer.check_password(password):
                return interviewer
        except Interviewer.DoesNotExist:
            pass

        return None
