import uuid
from django.db import models

class Candidate(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=256, null=True, blank=True)
    email = models.CharField(max_length=256, null=True, blank=True, unique=True)
    username = models.CharField(max_length=256, null=True, blank=True, unique=True)
    phone_number = models.CharField(max_length=256, null=True, blank=True, unique=True)
    password = models.CharField(max_length=256, null=True, blank=True)

