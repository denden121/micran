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
    lateness = models.CharField(max_length=30, blank=False)

    def __str__(self):
        return self.user.username

class Project(models.Model):
    name = models.CharField(max_length=50, blank=True)
    participants = models.ManyToManyField('Profile', related_name='participants', blank=True, default=None)
    tasks = models.CharField(max_length=500, blank=True)
    lifespan = models.DurationField(blank=True)
    is_done = models.BooleanField(blank=True, default=False)
    
    def __str__(self):
        return self.name


class Report(models.Model):
    name = models.CharField(max_length=50, blank=True)
    user = models.ForeignKey('Profile', related_name='creator', on_delete=models.CASCADE)
    project = models.ForeignKey(Project, related_name='project_id', blank=True, on_delete=models.CASCADE)
    text = models.TextField(max_length=500, blank=True)
    hour = models.FloatField(blank=True)

    def __str__(self):
        return self.name