from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from .models import Profile, Project, Report
from django.contrib.auth.models import User
from django.core import serializers
from rest_framework_simplejwt.authentication import JWTAuthentication
from .forms import ProjectForm, ReportForm, UserForm, ProfileForm
import simplejson as json



def get_user_jwt(request):
    token = request.headers.get('Authorization')
    validated_token = JWTAuthentication().get_validated_token(token)
    user = JWTAuthentication().get_user(validated_token)
    return user


# def get_access(access_lvl, action):
#     actions = ['create_user', 'make_reports', 'check_reports', 'check_others_users',
#               'check_reports', 'create_projects', 'base_actions']
#     if access_lvl >= num:
# do it


@csrf_exempt
def cabinet_view(request, user_id='default'):
    if user_id == 'default':
        user = get_user_jwt(request)
        if not hasattr(user, 'profile'):
            return HttpResponse("Profile indefined")
        profile = Profile.objects.filter(user=user)
        data = serializers.serialize('json', profile)
        return HttpResponse(data)
    else:
        user = get_user_jwt(request)
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
        form = UserForm(request.POST, request.FILES, instance=user)
        print(form.errors)
        if form.is_valid():
            form.save()
            return HttpResponse("Success")
        return HttpResponse("Something went wrong")
    return HttpResponse('Method not allowed')


@csrf_exempt
def all_report_view(regiquest, user_id='default'):
    if user_id == 'default':
        user = get_user_jwt(request)
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
                    report.save()
                    return HttpResponse("Success")
                return HttpResponse("Fail")
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")
    else:
        user = get_user_jwt(request)
        if user:
            if request.method == "GET":
                if user_id != user.id and not user.is_staff:
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
            if user_id != user and not user.is_staff:
                return HttpResponse("You don't have permissions")
            if request.method == "GET":
                report = Report.objects.filter(user=user_id, id=report_id)
                data = serializers.serialize('json', report)
                return HttpResponse(data)
            return HttpResponse("Method not allowed")
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
            if request.method == "POST":
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
            if request.method == "GET":
                if user_id != user.id and not user.is_staff:
                    return HttpResponse("You don't have permissions")
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
            elif request.method == "POST":
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
            if user_id != user.id and not user.is_staff:
                return HttpResponse("You don't have permissions")
            if request.method == "GET":
                project = Project.objects.filter(participants=user_id, id=project_id)
                data = serializers.serialize('json', project)
                return HttpResponse(data)
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")