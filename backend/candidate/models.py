from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    
    ROLE_CHOICES=[
        ("CANDIDATE", "Candidate"),
        ("INTERVIEWER", "Interviewer"),
    ]

    phone_number = models.CharField(max_length=20, unique=True,null=True)
    role = models.CharField(max_length=15, choices=ROLE_CHOICES)

    def __str__(self):
        return self.username