from .models import Report
from django.test import TestCase, Client
from django.contrib.auth.models import User
from .models import Profile, Report

class ReportModelTests(TestCase):

    def test_create_profile_and_report(self):
        user = User(username='admin')
        profile = Profile(user=user, first_name='Vanya', last_name='Ivanov', middle_name='Ivanovich')
        report = Report(creator_id=profile, text='Ivanovich Ivanovich Ivanovich Ivanovich Ivanovich')
        # hour = models.FloatField(blank=True)
        # project = models.CharField(max_length=50, blank=True)
        # curator = models.CharField(max_length=50, blank=True, default=None)

        self.assertIs(profile.middle_name, 'Ivanovich')
        self.assertIs(profile.first_name, 'Vanya')
        self.assertIs(report.creator_id, profile)
