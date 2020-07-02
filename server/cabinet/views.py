from rest_framework_simplejwt.tokens import RefreshToken
from datetime import datetime
from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from .models import Profile, Project, Report, Action, Group
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


def get_access(action, user):
    try:
        action = Action.objects.get(group=user.profile.group, action=action)
    except Action.DoesNotExist:
        return False
    return True


@csrf_exempt
def token(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    if user:
        token = get_tokens_for_user(user)
        return HttpResponse(json.dumps(token))
    else:
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
    t = datetime().now()
    user = get_user_jwt(request)
    if user_id == 'default':
        profile = Profile.objects.get(user=user)
        if user:
            if request.method == "GET":
                reports = Report.objects.filter(creator_id=user.id)
                data = serializers.serialize('json', reports)
                return HttpResponse(data)
            if request.method == "POST":
                form = ReportForm(request.POST)
                print(form.errors)
                if form.is_valid():
                    report = form.save(commit=False)
                    report.creator_id = profile
                    print(request.POST)
                    report.save()
                    print(report.date)
                    return HttpResponse("Success")
                return HttpResponse("Fail")
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")
    else:
        if user:
            if request.method == "GET":
                if user_id != user.id and not get_access('check_reports', user):
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
        report = Report.objects.filter(creator_id_id=user.id, id=report_id)
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
                if get_access('check_reports', user):
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
            if request.method == "POST" and get_access('make_projects', user):
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
            if request.method == "GET" and get_access('check_projects', user):
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
            elif request.method == "POST" and get_access('make_projects', user):
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
            if request.method == "GET" or get_access('check_projects', user):
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
    if user and get_access('info_about_group', user):
        groups = Group.objects.all()
        data = {}
        for group in groups:
            profiles = Profile.objects.filter(group=group)
            users = {}
            for profile in profiles:
                users = [profile.first_name + ' ' + profile.last_name + ' ' + profile.middle_name]
            if users:
                data['pk: ' + str(group.pk)] = {'model': 'cabinet.group',  'name': group.name, 'users' : users, 'description' : group.description}
        return HttpResponse(json.dumps(data))
    # return HttpResponse(data)