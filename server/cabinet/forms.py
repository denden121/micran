from django import forms
from .models import Report, Project, Profile, Group, Action, SalaryCommon, SalaryIndividual
from django.contrib.auth.models import User
import re
from django.core.exceptions import ValidationError


class ReportForm(forms.ModelForm):
    class Meta:
        model = Report
        exclude = ['creator_id']


# class UserForm(forms.ModelForm):
#     class Meta:
#         model = User
#         fields = []


class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['middle_name', 'first_name', 'last_name']


class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        exclude = '__all__'


class GroupForm(forms.ModelForm):
    class Meta:
        model = Group
        fields = '__all__'


class ActionForm(forms.ModelForm):
    class Meta:
        model = Action
        exclude = ['available_actions']


class SalaryCommonForm(forms.ModelForm):
    class Meta:
        model = SalaryCommon
        exclude = ('date',)


class SalaryIndividualForm(forms.ModelForm):
    class Meta:
        model = SalaryIndividual
        fields = ['vacation', 'sick_leave', 'day_off', 'time_orion', 'plan_salary', 'award', 'penalty', 'is_penalty']