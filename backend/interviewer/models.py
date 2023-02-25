import uuid
from django.db import models

class Interviewer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=256, null=True, blank=True)
    email = models.CharField(max_length=256, unique=True, null=True, blank=True)
    linkedin_id = models.CharField(max_length=300, unique=True, null=True, blank=True)
    phone_number = models.CharField(max_length=256, unique=True, null=True, blank=True)
    password = models.CharField(max_length=256, null=True, blank=True)
