from django.db import models
from django.contrib.auth.models import User

TYPE_CALENDAR_MARK = [
    ('undefined', 'undefined'),
    ('paid_holiday', 'paid_holiday'),
    ('unpaid_holiday', 'unpaid_holiday'),
    ('sick_leave', 'sick_leave'),
    ('hooky', 'hooky'),
    ('event', 'event'),
    ('study_holiday', 'study_holiday'),
    ('planned_holiday', 'planned_holiday'),
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


class Direction(models.Model):
    subdepartment = models.ForeignKey('Department', on_delete=models.SET_NULL, null=True)
    direction_name = models.CharField(max_length=30, blank=True)
    direction_code = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.direction_name


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.PROTECT, primary_key=True)
    sex = models.CharField(max_length=10, blank=True)
    department = models.ForeignKey('Department', related_name='department_id', on_delete=models.SET_NULL, blank=True,
                                   null=True)
    direction = models.ForeignKey('Direction', related_name='direction', on_delete=models.SET_NULL, blank=True,
                                  null=True)
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
    direction = models.ForeignKey('Direction', related_name='direction_id', on_delete=models.SET_NULL, blank=True,
                                  null=True)
    manager = models.ForeignKey('Profile', related_name='manager_id', on_delete=models.SET_NULL, null=True)
    client = models.CharField(max_length=100, blank=True)
    chief_designer = models.ForeignKey('Profile', related_name='chief_designer_id', on_delete=models.SET_NULL,
                                       null=True)
    deputy_chief_designer = models.ForeignKey('Profile', related_name='deputy_chief_designer_id',
                                              on_delete=models.SET_NULL, null=True)
    production_order = models.CharField(max_length=100, blank=True)
    comment_for_employees = models.TextField(blank=True)
    contract = models.CharField(max_length=100)
    type = models.BooleanField(blank=True, default='False')  # False is inside True is outer
    status = models.BooleanField(blank=True, default='False')  # False is Open True is close
    report_availability = models.BooleanField(blank=True, default='False')  # False is Available True is Inavailable
    acceptance_vp = models.BooleanField(blank=True, default='False')  # False in False True is True

    def __str__(self):
        return self.name


class Report(models.Model):
    status = models.BooleanField(blank=True)
    creator_id = models.ForeignKey('Profile', on_delete=models.SET_NULL, to_field='user', null=True,
                                   related_name='creator')
    ban_id = models.ForeignKey('Profile', on_delete=models.SET_NULL, to_field='user', null=True, default=None,
                               related_name='ban', blank=True)
    project = models.ForeignKey(Project, related_name='project_id', blank=True, on_delete=models.SET_NULL, null=True)
    text = models.TextField(max_length=500, blank=True)
    hour = models.FloatField(blank=True)
    date = models.DateField(blank=True)

    # def __str__(self):
    # return self.name


class Department(models.Model):
    department_code = models.CharField(max_length=50, blank=True)
    department_name = models.CharField(max_length=100, blank=True)
    subdepartment_code = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.department_name


class SalaryIndividual(models.Model):
    days_worked = models.FloatField(blank=True, default=0)
    vacation = models.FloatField(blank=True, default=0)
    sick_leave = models.FloatField(blank=True, default=0)
    day_off = models.FloatField(blank=True, default=0)
    time_from_report = models.FloatField(blank=True, default=0)
    time_orion = models.FloatField(blank=True, default=0)
    time_norm = models.FloatField(blank=True, default=0)
    time_off = models.FloatField(blank=True, default=0)
    plan_salary = models.FloatField(blank=True, default=0)
    award = models.FloatField(blank=True, default=0)
    penalty = models.FloatField(blank=True, default=0)
    is_penalty = models.BooleanField(blank=True, default=0)
    salary_hand = models.FloatField(blank=True, default=0)
    person = models.ForeignKey('Profile', on_delete=models.SET_NULL, to_field='user', null=True)
    date = models.DateField(blank=True)
    common_part = models.ForeignKey('SalaryCommon', on_delete=models.SET_NULL, null=True)

    def calculate(self, salary_common):
        self.days_worked = salary_common.days_norm_common - (self.day_off + self.vacation + self.sick_leave)
        self.time_norm = 8 * self.days_worked
        try:
            self.penalty = (self.time_norm - self.time_orion) * self.plan_salary / self.time_norm
            self.salary_hand = self.plan_salary * self.days_worked / salary_common.days_norm_common - self.penalty + self.award
        except ZeroDivisionError:
            self.penalty = 0
            self.salary_hand = 0

    def __str__(self):
        return 'Salary for ' + self.person.last_name + ' ' + self.person.first_name + ' ' + self.person.middle_name + \
               ' for ' + str(self.date.year) + ' ' + str(self.date.month)


class SalaryCommon(models.Model):
    days_norm_common = models.FloatField(blank=True, default=0)
    time_norm_common = models.FloatField(blank=True, default=0)
    date = models.DateField(blank=True, unique=True)


class TimeCard(models.Model):
    user = models.IntegerField(blank=True, default=0)
    orion_id = models.IntegerField(blank=True, default=0)
    intellect_id = models.IntegerField(blank=True, default=0)
    leaving = models.TimeField(blank=True)
    late = models.TimeField(blank=True)
    fine_late = models.TimeField(blank=True, default="09:00:00")
    hooky = models.TimeField(blank=True)
    hours_worked = models.TimeField(blank=True)
    date = models.DateField(blank=True)


class CalendarMark(models.Model):
    person = models.ForeignKey('Profile', on_delete=models.SET_NULL, to_field='user', null=True)
    type = models.CharField(blank=True, max_length=50, choices=TYPE_CALENDAR_MARK)
    start_date = models.DateField(blank=True)
    end_date = models.DateField(blank=True)
