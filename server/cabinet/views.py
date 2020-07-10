from rest_framework_simplejwt.tokens import RefreshToken
from datetime import datetime
from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from .models import Profile, Project, Report, Action, Group, Logging, Salary
from django.contrib.auth.models import User
from django.core import serializers
from rest_framework_simplejwt.authentication import JWTAuthentication
from .forms import ProjectForm, ReportForm, ProfileForm, ActionForm, GroupForm
import simplejson as json
from django.contrib.auth import authenticate


def get_user_jwt(request):
    token = request.headers.get('Authorization')
    validated_token = JWTAuthentication().get_validated_token(token)
    user = JWTAuthentication().get_user(validated_token)
    return user


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


def get_access(action_num, user):
    try:
        Action.objects.get(group=user.profile.group, num=action_num)
    except Action.DoesNotExist:
        return False
    return True


def logging(request, username, status, action):
    log = Logging.objects.create(IP=request.POST.get('IP'), login=username, status=status, action=action)


@csrf_exempt
def token(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    print(f'fdsffsddffddsfsdsdfdsffdsfssdfsdfdsfdsfdsfds{username}    {password}')
    user = authenticate(username=username, password=password)
    print('kjdlgkdj', request.POST.get('IP'))
    action = 'login'
    if user:
        status = True
        token_json = get_tokens_for_user(user)
        logging(request, username=username, status=status, action=action)
        return HttpResponse(json.dumps(token_json))
    else:
        status = False
        logging(request, username=username, status=status, action=action)
        return HttpResponse("False")


@csrf_exempt
def check_view(request):
    user = get_user_jwt(request)
    if not hasattr(user, 'profile'):
        return HttpResponse("False")
    return HttpResponse("True")


@csrf_exempt
def cabinet_view(request, user_id='default'):
    user = get_user_jwt(request)
    if user_id == 'default':
        if not hasattr(user, 'profile'):
            return HttpResponse("Profile undefined")
        # data_user = serializers.serialize('json', [user])
        data_profile = serializers.serialize('json', [user.profile], fields=('first_name', 'last_name', 'middle_name'))
        return HttpResponse(data_profile)
    else:
        if user and (user.id == user_id or user.is_staff):
            profile = Profile.objects.filter(user=user)
            data = serializers.serialize('json', profile)
            return HttpResponse(data)
        return HttpResponse("Permission denied")


@csrf_exempt
def register_view(request):
    user = get_user_jwt(request)
    if not hasattr(user, 'profile'):
        Profile.objects.create(user=user)
    if request.method == "POST":
        form = ProfileForm(request.POST, request.FILES, instance=user.profile)
        print(form.errors)
        if form.is_valid():
            update = form.save(commit=False)
            update.user = user
            update.save()
            return HttpResponse("Success")
        return HttpResponse("Something went wrong")
    return HttpResponse('Method not allowed')


@csrf_exempt
def all_report_view(request, user_id='default'):
    t = datetime.now()
    user = get_user_jwt(request)
    if user_id == 'default':
        profile = Profile.objects.get(user=user)
        if user:
            if request.method == "GET":
                reports = Report.objects.filter(creator_id=user.id, date__month = request.GET['month'], date__year = request.GET['year'])
                data = serializers.serialize('json', reports)
                return HttpResponse(data)
            if request.method == "POST":
                reports = Report.objects.filter(creator_id=user.id, date__month=t.month, date__year=t.year)
                if reports:
                    return HttpResponse("Already have a report")
                form = ReportForm(request.POST)
                print(form.errors)
                if form.is_valid():
                    report = form.save(commit=False)
                    report.creator_id = profile
                    print(request.POST)
                    report.save()
                    return HttpResponse("Success")
                return HttpResponse("Fail")
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")
    else:
        if user:
            if request.method == "GET":
                if user_id != user.id and not get_access(11, user):  #11 is check reports
                    return HttpResponse("You don't have permissions")
                reports = Report.objects.filter(creator_id=user_id)
                data = serializers.serialize('json', reports)
                return HttpResponse(data)
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")


@csrf_exempt
def report_view(request, report_id, user_id='default'):
    if user_id == 'default':
        user = get_user_jwt(request)
        report = Report.objects.get(creator_id_id=user.id, id=report_id)
        if user:
            if request.method == "GET":
                data = serializers.serialize('json', report)
                return HttpResponse(data)
            elif request.method == "POST":
                form = ReportForm(request.POST, request.FILES, instance=report)
                if form.is_valid():
                    update = form.save()
                return HttpResponse("Success")
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")
    else:
        user = get_user_jwt(request)
        if user:
            if request.method == "GET":
                if get_access(11, user):
                    report = Report.objects.filter(user=user_id, id=report_id)
                    data = serializers.serialize('json', report)
                    return HttpResponse(data)
                return HttpResponse("You don't have permissions")
            return HttpResponse("Access error")
        return HttpResponse("Authentication error")


@csrf_exempt
def all_projects_view(request, user_id='default'):
    if user_id == 'default':
        user = get_user_jwt(request)
        if user:
            if request.method == "GET":
                projects = Project.objects.filter(participants=user.id)
                data = serializers.serialize('json', projects)
                return HttpResponse(data)
            if request.method == "POST" and get_access(13, user):  #13 is create projects
                form = ProjectForm(request.POST)
                participants = request.POST['participants'].split()
                participants = [(User.objects.get(username=participant)) for participant in participants]
                profiles = [Profile.objects.get(user=participant) for participant in participants]
                if profiles and form.is_valid():
                    project = form.save()
                    [project.participants.add(profiles[i].user.id) for i in range(len(profiles))]
                    return HttpResponse("Success")
                return HttpResponse("Something went wrong")
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")
    else:
        user = get_user_jwt(request)
        if user:
            if request.method == "GET" and get_access(12, user): #12 is check projects
                projects = Project.objects.filter(participants=user_id)
                data = serializers.serialize('json', projects)
                return HttpResponse(data)
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")


@csrf_exempt
def project_view(request, project_id, user_id='default'):
    if user_id == 'default':
        user = get_user_jwt(request)
        if user:
            if request.method == "GET":
                project = Project.objects.filter(id=project_id)
                data = serializers.serialize('json', project)
                return HttpResponse(data)
            elif request.method == "POST" and get_access(13, user):
                project = Project.objects.get(id=project_id)
                form = ProjectForm(request.POST, request.FILES, instance=project)
                if form.is_valid():
                    update = form.save(commit=False)
                    participants = [(User.objects.get(username=participant)) for participant in
                                    request.POST['participants'].split()]
                    profiles = [Profile.objects.get(user=participant) for participant in participants]
                    if profiles and form.is_valid():
                        project = form.save()
                        [project.participants.add(profiles[i].user.id) for i in range(len(profiles))]
                        return HttpResponse("Success")
                return HttpResponse("Success")
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")
    else:
        user = get_user_jwt(request)
        if user:
            if request.method == "GET" or get_access(12, user):
                project = Project.objects.filter(participants=user_id, id=project_id)
                data = serializers.serialize('json', project)
                return HttpResponse(data)
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")


@csrf_exempt
def group_view(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            groups = Group.objects.all()
            data = serializers.serialize('json', groups)
            return HttpResponse(data)
        if request.method == "POST":
            group = GroupForm(request.POST)
            if group.is_valid():
                update = group.save(commit=False)
                actions = request.POST['actions'].split()
                for action in actions:
                    print(action)
                actions = [Action.objects.get(pk=int(action)) for action in actions]
                if actions and group.is_valid():
                    group = group.save()
                    [group.available_actions.add(actions[i]) for i in range(len(actions))]
                    return HttpResponse("Success")


@csrf_exempt
def action_view(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            actions = Action.objects.all()
            data = serializers.serialize('json', actions)
            return HttpResponse(data)
        if request.method == "POST":
            action = ActionForm(request.POST)
            if action.is_valid():
                action.save()
                return HttpResponse("Success")


@csrf_exempt
def available_actions(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            group = user.profile.group
            data = serializers.serialize('json', group.available_actions.all())
            return HttpResponse(data)


@csrf_exempt
def groups_with_permission(request):
    user = get_user_jwt(request)
    if user and get_access(101, user):
        groups = Group.objects.all()
        data = []
        for group in groups:
            profiles = Profile.objects.filter(group=group)
            users = []
            for profile in profiles:
                users.append(profile.first_name + ' ' + profile.last_name + ' ' + profile.middle_name)
                fields = {'name': group.name, 'users': users, 'description': group.description}
            if users:
                fields = {'name': group.name, 'users': users, 'description': group.description}
                users = []
            else:
                fields = {'name': group.name, 'users': users, 'description': group.description}
                users = []
            data.append({'model': 'cabinet.group','pk': group.pk,'fields': fields})
        return HttpResponse(json.dumps(data))


@csrf_exempt
def logs(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            data = serializers.serialize('json', Logging.objects.all())
            return HttpResponse(data)

@csrf_exempt
def salary(request):
    user = get_user_jwt(request)
    person = request.POST.get('person')
    if user:
        if request.method == "POST":
            salary = Salary.objects.create(person=person)
            salary.time_norm = request.POST.get('time_norm')
            salary.plan_salary = request.POST.get('plan_salary')
            salary.is_awarded = request.POST.get('is_awarded')
            salary.award = request.POST.get('award')
            salary.days_worked = salary.days_norm - (salary.vacation + salary.sick_leave + salary.day_off)
            # time_report  #достать из отчета
            # time_orion = models.FloatField(blank=True)  # достать из бд
        # days_norm = models.FloatField(blank=True)

        # vacation = models.FloatField(blank=True)
        # sick_leave = models.FloatField(blank=True)
        # day_off = models.FloatField(blank=True)
        #  = models.FloatField(blank=True)
        #
        # salary_hand = models.FloatField(blank=True)