import uuid
from django.db import models
from django.contrib.auth.hashers import check_password


class Candidate(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=256, null=True, blank=True)
    email = models.CharField(max_length=256, null=True, blank=True, unique=True)
    username = models.CharField(max_length=256, null=True, blank=True, unique=True)
    phone_number = models.CharField(max_length=256, null=True, blank=True, unique=True)
    password = models.CharField(max_length=256, null=True, blank=True)
    is_active = models.BooleanField(default=True, null=True, blank=True)
    is_interviewer = models.BooleanField(default=True, null=True, blank=True)

    def check_password(self, raw_password):
        """
        Check the candidate's password against the hashed password in the database.
        """
        return check_password(raw_password, self.password)

