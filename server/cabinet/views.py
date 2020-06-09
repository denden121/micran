from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from .models import Profile, Project, Report
from django.contrib.auth.models import User
from django.core import serializers
from rest_framework_simplejwt.authentication import JWTAuthentication
from .forms import ProjectForm, ReportForm
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
        profile = get_object_or_404(Profile, user=user)
        print(profile)
        return redirect('register/')
        return redirect(str(user.id) + '/')
    else:
        user = get_user_jwt(request)
        if user and (user.id == user_id or user.is_staff):
            profile = Profile.objects.filter(user=user)
            data = serializers.serialize('json', profile)
            return HttpResponse(data)
        return HttpResponse("Permission denied")


@csrf_exempt
def register_view(request):
    if request.method == 'POST':
        user = get_user_jwt(request)
        return HttpResponse('Success')
        if user:
            field = request.POST('field')
            new_profile = Profile.objects.create(user=user, field=field)
            new_profile.save()
            return HttpResponse('Success')
    return HttpResponse('Method not allowed')


@csrf_exempt
def all_report_view(request, user_id='default'):
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
                if form.is_valid():
                    report = form.save(commit=False)
                    report.creator_id = profile
                    report.save()
                    return HttpResponse("Success")
                print(report.cleaned_data)
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
        if user:
            if request.method == "GET":
                report = Report.objects.filter(user=user.id, id=report_id)
                data = serializers.serialize('json', report)
                return HttpResponse(data)
            elif request.method == "POST":
                new_report = Report.objects.filter(id=report_id)
                # if 'name' in request.POST:
                # name = request.POST['name']
                # new_report.update(name = name)
                if 'text' in request.POST:
                    text = request.POST['text']
                    new_report.update(text=text)
                if 'hour' in request.POST:
                    hour = request.POST['hour']
                    new_report.update(hour=hour)
                return HttpResponse("Success")
            elif request.method == "DELETE":
                report = Report.objects.get(user=user.id, id=report_id)
                report.delete()
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
                project = Project.objects.filter(participants=user.id, id=project_id)
                data = serializers.serialize('json', project)
                return HttpResponse(data)
            elif request.method == "POST":
                new_project = Project.objects.filter(id=project_id)
                if 'name' in request.POST:
                    name = request.POST['name']
                    new_project.update(name=name)
                if 'tasks' in request.POST:
                    tasks = request.POST['tasks']
                    new_project.update(tasks=tasks)
                if 'status' in request.POST:
                    status = request.POST['status']
                    new_project.update(is_done=status)
                if 'participants' in request.POST:
                    participants = request.POST['participants'].split()
                    participants = [(User.objects.get(username=participant)) for participant in participants]
                    profiles = [Profile.objects.get(user=participant) for participant in participants]
                    if profiles:
                        [new_project.participants.add(profiles[i].user.id) for i in range(len(profiles))]
                return HttpResponse("Success")
            elif request.method == "DELETE":
                project = Project.objects.get(participants=request.user.id, id=project_id)
                project.delete()
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
