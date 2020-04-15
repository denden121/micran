from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    sex = models.CharField(max_length=5, blank=False)
    subdivision = models.CharField(max_length=30, blank=False)
    birth_date = models.DateField(null=True, blank=False)
    position = models.CharField(max_length=30, blank=False)
    experience = models.FloatField(blank=False, default='0.0')
    shift = models.CharField(max_length=30, blank=False)
    part_time_job = models.CharField(max_length=30, blank=False)
    group = models.CharField(max_length=30, blank=False)
    lateness = models.TimeField(max_length=30, blank=False)