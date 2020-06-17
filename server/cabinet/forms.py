from django import forms
from .models import Report, Project, Profile
from django.contrib.auth.models import User
import re
from django.core.exceptions import ValidationError


class ReportForm(forms.ModelForm):
    class Meta:
        model = Report
        exclude = ['creator_id']


class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']


class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['middle_name']


class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        exclude = ['participants']