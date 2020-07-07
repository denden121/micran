from django.db import models
from django.contrib.auth.models import User


class Logging(models.Model):
    IP = models.GenericIPAddressField()
    login = models.CharField(max_length=30, blank=True)
    action = models.CharField(max_length=30, blank=True)
    status = models.BooleanField()


class Action(models.Model):
    action = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return self.action


class Group(models.Model):
    name = models.CharField(max_length=30, blank=True)
    description = models.CharField(max_length=500, blank=True)
    available_actions = models.ManyToManyField(Action, blank=True)

    def __str__(self):
        return self.name


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    sex = models.CharField(max_length=5, blank=True)
    subdivision = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    position = models.CharField(max_length=30, blank=True)
    middle_name = models.CharField(max_length=30, blank=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    experience = models.FloatField(blank=False, default='0.0')
    shift = models.CharField(max_length=30, blank=True)
    part_time_job = models.CharField(max_length=30, blank=True)
    lateness = models.CharField(max_length=30, blank=True)
    group = models.ForeignKey('Group', on_delete=models.PROTECT, blank=True, null=True)
    # first_time = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username


class Project(models.Model):
    name = models.CharField(max_length=50, blank=True)
    participants = models.ManyToManyField('Profile', blank=True)
    tasks = models.CharField(max_length=500, blank=True)
    is_done = models.BooleanField(blank=True, default=False)


    def __str__(self):
        return self.name


class Report(models.Model):
    # name = models.CharField(max_length=50, blank=True)
    creator_id = models.ForeignKey('Profile', on_delete=models.CASCADE, to_field='user')
    # project = models.ForeignKey(Project, related_name='project_id', blank=True, on_delete=models.CASCADE)
    text = models.TextField(max_length=500, blank=True)
    hour = models.FloatField(blank=True)
    project = models.CharField(max_length=50, blank=True)
    curator = models.CharField(max_length=50, blank=True, default=None)
    date = models.DateField(auto_now_add=True, blank=True)

    # def __str__(self):
        # return self.name