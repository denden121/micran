from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from .models import Profile, Project, Report, Action
from django.contrib.auth.models import User
from django.core import serializers
from rest_framework_simplejwt.authentication import JWTAuthentication
from .forms import ProjectForm, ReportForm, ProfileForm
import simplejson as json



def get_user_jwt(request):
    token = request.headers.get('Authorization')
    validated_token = JWTAuthentication().get_validated_token(token)
    user = JWTAuthentication().get_user(validated_token)
    return user


def get_access(action, user):
    try:
        action = Action.objects.get(group = user.profile.group, action=action)
    except Action.DoesNotExist:
        return False
    return True


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
    print(request.POST)
    user = get_user_jwt(request)
    if user_id == 'default':
        profile = Profile.objects.get(user=user)
        if user:
            if request.method == "GET":
                reports = Report.objects.filter(creator_id=user.id)
                data = serializers.serialize('json', reports)
                return HttpResponse(data)
            # get_access('Make_reports', user)
            if request.method == "POST":
                form = ReportForm(request.POST)
                print(form.errors)
                if form.is_valid():
                    report = form.save(commit=False)
                    report.creator_id = profile
                    report.save()
                    return HttpResponse("Success")
                return HttpResponse("Fail")
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")
    else:
        if user:
            if request.method == "GET":
                if user_id != user.id and not get_access('Check_reports', user):
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
            elif request.method == "POST" and get_access('Make_projects', user):
                form = ReportForm(request.POST, request.FILES, instance=report)
                if form.is_valid():
                    update = form.save()
                return HttpResponse("Success")
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")
    else:
        user = get_user_jwt(request)
        if user:
            if request.method == "GET" and get_access('Check_projects', user):
                report = Report.objects.filter(user=user_id, id=report_id)
                data = serializers.serialize('json', report)
                return HttpResponse(data)
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
            if request.method == "POST" and get_access('Make_projects', user):
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
            if request.method == "GET" and get_access('Check_projects', user):
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
            elif request.method == "POST" and get_access('Make_projects', user):
                project = Project.objects.get(id=project_id)
                form = ProjectForm(request.POST, request.FILES, instance=project)
                if form.is_valid():
                    update = form.save(commit=False)
                    participants = request.POST['participants'].split()
                    participants = [(User.objects.get(username=participant)) for participant in participants]
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
            if request.method == "GET" and get_access('Check_projects', user):
                project = Project.objects.filter(participants=user_id, id=project_id)
                data = serializers.serialize('json', project)
                return HttpResponse(data)
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")