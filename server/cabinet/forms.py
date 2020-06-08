from django import forms
from .models import Report, Project
import re
from django.core.exceptions import ValidationError


class ReportForm(forms.ModelForm):
    class Meta:
        model = Report
        fields = '__all__'


class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = '__all__'


# class ReportForm(forms.ModelForm):
#     class Meta:
#         model = Report
#         fields = '__all__'