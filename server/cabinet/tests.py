from .models import Report
from django.test import TestCase, Client
from django.contrib.auth.models import User
from .models import Profile, Report, Action, Group, GroupAction
from datetime import datetime

class ReportModelTests(TestCase):

    def setUp(self) -> None:
        user = User.objects.create(password='admin', username='admin')
        user_1 = User.objects.create(password='admin_1', username='admin_1')
        profile = Profile.objects.create(user=user, first_name='Vanya', last_name='Ivanov', middle_name='Ivanovich')
        Profile.objects.create(user=user_1, first_name='Inna', last_name='Ivanova', middle_name='Ivanovich')
        profiles = Profile.objects.all()
        Report.objects.create(creator_id=profile, text='Ivanovich Ivanovich Ivanovich Ivanovich Ivanovich',
                              hour=5, status=True, ban_id=profile, check=True, check_id=profile, date = datetime.now())
        Action.objects.create(action='Eat', num='10')
        Action.objects.create(action='Drink', num='11')
        Action.objects.create(action='Cry', num='12')
        Action.objects.create(action='Sleep', num='13')
        actions = Action.objects.all()
        group_action = GroupAction.objects.create(name='Common_things')
        group_action.available_actions.set(actions)
        group = Group.objects.create(name='Commoners')
        group.actions.set(actions)
        group.participants.set(profiles)


    def test_profile_and_report(self):
        user = User.objects.get(username='admin')
        profile = Profile.objects.get(user=user)
        report = Report.objects.get(creator_id=profile)
        self.assertEqual(profile.middle_name, 'Ivanovich')
        self.assertEqual(profile.first_name, 'Vanya')
        self.assertEqual(report.creator_id, profile)
        self.assertEqual(report.status, True)
        self.assertEqual(report.ban_id, profile)
        self.assertEqual(report.check, True)
        self.assertEqual(report.check_id, profile)

    def test_actions_and_groups(self):
        group_actions = GroupAction.objects.all()
        for group_action in group_actions:
            for action in group_action.available_actions.all():
                print(action.action)
                print(action.num)