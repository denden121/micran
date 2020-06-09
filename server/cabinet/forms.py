from django import forms
from .models import Report, Project
from django.contrib.auth.models import User
import re
from django.core.exceptions import ValidationError


class ReportForm(forms.ModelForm):
    class Meta:
        model = Report
        exclude = ['creator_id']


class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        exclude = ['participants']


# class ReportForm(forms.ModelForm):
#     class Meta:
#         model = Report
#         fields = '__all__'