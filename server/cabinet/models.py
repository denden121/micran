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
    # name = models.CharField(max_length=50, blank=True)
    # name = models.CharField(max_length=50, blank=True)
    creator_id = models.ForeignKey('Profile', on_delete=models.CASCADE, to_field='user')
    # project = models.ForeignKey(Project, related_name='project_id', blank=True, on_delete=models.CASCADE)
    text = models.TextField(max_length=500, blank=True)
    hour = models.FloatField(blank=True)
    project = models.CharField(max_length=50, blank=True)
    curator = models.CharField(max_length=50, blank=True, default=None)
    date = models.DateField(blank=True)

    # def __str__(self):
        # return self.name


class Salary(models.Model):
    days_norm = models.FloatField(blank=True)
    days_worked = models.FloatField(blank=True)
    vacation = models.FloatField(blank=True)
    sick_leave = models.FloatField(blank=True)
    day_off = models.FloatField(blank=True)
    time_report = models.FloatField(blank=True)
    time_norm = models.FloatField(blank=True)
    time_orion = models.FloatField(blank=True)
    plan_salary = models.FloatField(blank=True)
    award = models.FloatField(blank=True)
    is_awarded = models.BooleanField(blank=True)
    salary_hand = models.FloatField(blank=True)
    person = models.ForeignKey('Profile', on_delete=models.CASCADE, to_field='user')