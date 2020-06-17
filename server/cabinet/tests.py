from .models import Report
from django.test import TestCase
from django.contrib.auth.models import User
from .models import Profile, Report

class ReportModelTests(TestCase):

    def test_was_published_recently_with_future_question(self):
        """
        was_published_recently() returns False for questions whose pub_date
        is in the future.
        """
        user = User(username='admin', first_name='Vanya', last_name='Ivanov')
        profile = Profile(user=user, middle_name='Ivanovich')
        report = Report(creator_id=profile, text='Ivanovich Ivanovich Ivanovich Ivanovich Ivanovich')
        # hour = models.FloatField(blank=True)
        # project = models.CharField(max_length=50, blank=True)
        # curator = models.CharField(max_length=50, blank=True, default=None)

        self.assertIs(profile.middle_name, 'Ivanovich')