from django.db import models
from django.contrib.auth.models import User


TYPE_PROJECT = [
    ('INTERIOR', 'Interior'),
    ('EXTERNAL', 'External'),
]

STATUS_PROJECT = [
    ('CLOSE', 'Close'),
    ('OPEN', 'Open'),
]

REPORT_PROJECT = [
    ('AVAILABLE', 'Available'),
    ('UNAVAILABLE', 'Unavailable'),
]


class Logging(models.Model):
    IP = models.GenericIPAddressField()
    login = models.CharField(max_length=30, blank=True)
    action = models.CharField(max_length=30, blank=True)
    status = models.BooleanField()
    date = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return f'{self.action} at {self.date} by {self.login} with {self.status} status'


class Action(models.Model):
    action = models.CharField(max_length=30, blank=True)
    num = models.IntegerField()

    def __str__(self):
        return self.action


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.PROTECT, primary_key=True)
    sex = models.CharField(max_length=5, blank=True)
    subdivision = models.CharField(max_length=30, blank=True)
    departament = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    position = models.CharField(max_length=30, blank=True)
    middle_name = models.CharField(max_length=30, blank=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    experience = models.FloatField(blank=False, default='0.0')
    shift = models.CharField(max_length=30, blank=True)
    part_time_job = models.CharField(max_length=30, blank=True)
    lateness = models.CharField(max_length=30, blank=True)
    SRI_SAS = models.BooleanField(blank=True, default='False')

    def __str__(self):
        return self.user.username


class Group(models.Model):
    name = models.CharField(max_length=30, blank=True, unique=True)
    description = models.CharField(max_length=500, blank=True)
    available_actions = models.ManyToManyField(Action, blank=True)
    participants = models.ManyToManyField(Profile, blank=True)

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=100, blank=True)
    direction = models.CharField(max_length=100, blank=True)
    manager = models.CharField(max_length=100, blank=True)
    client = models.CharField(max_length=100, blank=True)
    chief_designer = models.CharField(max_length=100, blank=True)
    deputy_chief_designer = models.CharField(max_length=100, blank=True)
    production_order = models.CharField(max_length=100, blank=True)
    comment_for_employees = models.TextField(blank=True)
    contract = models.IntegerField(blank=True, default=1)
    type = models.CharField(max_length=10, blank=True, choices=TYPE_PROJECT)
    status = models.CharField(max_length=10, blank=True, choices=STATUS_PROJECT)
    report_availability = models.CharField(max_length=15, blank=True, choices=REPORT_PROJECT)
    acceptance_vp = models.BooleanField(blank=True, default='False')

    def __str__(self):
        return self.name


class Report(models.Model):
    status = models.BooleanField(blank=True)
    creator_id = models.ForeignKey('Profile', on_delete=models.PROTECT, to_field='user')
    project = models.ForeignKey(Project, related_name='project_id', blank=True, on_delete=models.PROTECT)
    text = models.TextField(max_length=500, blank=True)
    hour = models.FloatField(blank=True)
    date = models.DateField(blank=True)

    # def __str__(self):
        # return self.name


class SalaryIndividual(models.Model):
    days_worked = models.FloatField(blank=True, default = 0)
    vacation = models.FloatField(blank=True, default = 0)
    sick_leave = models.FloatField(blank=True, default = 0)
    day_off = models.FloatField(blank=True, default = 0)
    time_from_report = models.FloatField(blank=True, default = 0)
    time_orion = models.FloatField(blank=True, default = 0)
    time_norm = models.FloatField(blank=True, default = 0)
    time_off = models.FloatField(blank=True, default = 0)
    plan_salary = models.FloatField(blank=True, default = 0)
    award = models.FloatField(blank=True, default = 0)
    penalty = models.FloatField(blank=True, default = 0)
    is_penalty = models.BooleanField(blank=True, default = 0)
    salary_hand = models.FloatField(blank=True, default = 0)
    person = models.ForeignKey('Profile', on_delete=models.PROTECT, to_field='user')
    date = models.DateField(blank=True)
    common_part = models.ForeignKey('SalaryCommon', on_delete=models.PROTECT)


class SalaryCommon(models.Model):
    days_norm_common = models.FloatField(blank=True, default = 0)
    time_norm_common = models.FloatField(blank=True, default = 0)
    date = models.DateField(blank=True, unique=True)