from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Profile, Project, Report
from django.contrib.auth.models import User
from django.core import serializers
from django.contrib.auth import authenticate, login
from json import dumps
from rest_framework_simplejwt.authentication import JWTAuthentication 
from django.contrib.auth import logout


@csrf_exempt
def logout_view(request):
    logout(request)
    return HttpResponse("Success")


@csrf_exempt
def cabinet_view(request, user_id='default'):
    if user_id == 'default':
        if not request.user.is_authenticated:
            token = request.headers.get('Authorization')
            validated_token = JWTAuthentication().get_validated_token(token)
            user = JWTAuthentication().get_user(validated_token)
            login(request, user)
        if request.user.is_authenticated:
            # profile = Profile.objects.filter(user=request.user)
            return redirect(str(request.user.id) + '/')
        else:
            return HttpResponse("Fail")

    else:
        token = request.headers.get('Authorization')
        validated_token = JWTAuthentication().get_validated_token(token)
        user = JWTAuthentication().get_user(validated_token)
        login(request, user)
        if user and user.id == user_id or user.is_staff:
            profile = Profile.objects.filter(user=user)
            data = serializers.serialize('json', profile)
            return HttpResponse(data)
        else:
            return HttpResponse("Fail")


@csrf_exempt
def all_report_view(request, user_id='default'):
    if user_id == 'default':
        if request.user.is_authenticated:
            if request.method == "GET":
                reports = Report.objects.filter(creator_id=request.user.id)
                data = serializers.serialize('json', reports)
                return HttpResponse(data)
            if request.method == "POST":
                # name = request.POST['name']
                project = request.POST['project']
                text = request.POST['text']
                curator = request.POST['curator']
                hour = request.POST['hour']
                # project = Project.objects.get(name=project)
                profile = Profile.objects.get(user=request.user)
                # curator_profile = Profile.objects.get(user=curator)
                if project:
                    new_report = Report.objects.create(project=project, text=text, hour=hour, creator_id=profile,
                                                       curator=curator)
                    new_report.save()
                    return HttpResponse("Success")
                return HttpResponse("Something went wrong")
    else:
        if request.user.is_authenticated:
            if request.method == "GET":
                if user_id != request.user.id and not request.user.is_staff:
                    return HttpResponse("You don't have permissions")
                reports = Report.objects.filter(creator_id=user_id)
                data = serializers.serialize('json', reports)
                return HttpResponse(data)


@csrf_exempt
def report_view(request, report_id, user_id='default'):
    if user_id == 'default':
        if request.user.is_authenticated:
            if request.method == "GET":
                report = Report.objects.filter(user=request.user.id, id=report_id)
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
                report = Report.objects.get(user=request.user.id, id=report_id)
                report.delete()
                return HttpResponse("Success")
    else:
        if request.user.is_authenticated:
            if user_id != request.user.id and not request.user.is_staff:
                return HttpResponse("You don't have permissions")
            if request.method == "GET":
                report = Report.objects.filter(user=user_id, id=report_id)
                data = serializers.serialize('json', report)
                return HttpResponse(data)
            elif request.method == "POST":
                if user_id != request.user.id:
                    return HttpResponse("You don't have permissions")

                new_report = Report.objects.filter(id=report_id)
                # if 'name' in request.POST:
                    # name = request.POST['name']
                    # new_report.update(name = name)
                if 'text' in request.POST:
                    text = request.POST['text']
                    new_report.update(text = text)
                if 'hour' in request.POST:
                    hour = request.POST['hour']
                    new_report.update(hour = hour)
                return HttpResponse("Success")

            elif request.method == "DELETE":
                report = Report.objects.get(user=user_id, id=report_id)
                report.delete()
                return HttpResponse("Success")


@csrf_exempt
def all_projects_view(request, user_id='default'):
    if user_id == 'default':
        if request.user.is_authenticated:
            if request.user and request.method == "GET":
                projects = Project.objects.filter(participants=request.user.id)
                data = serializers.serialize('json', projects)
                return HttpResponse(data)
            if request.user and request.method == "POST":
                name = request.POST['name']
                tasks = request.POST['tasks']
                participants = request.POST['users'].split()
                participants = [(User.objects.get(username=participant)) for participant in participants]
                profiles = [Profile.objects.get(user=participant) for participant in participants]
                if profiles:
                    new_project = Project.objects.create(name=name, tasks=tasks)
                    new_project.save()
                    [new_project.participants.add(profiles[i].user.id) for i in range(len(profiles))]
                    return HttpResponse("Success")
                return HttpResponse("Something went wrong")
    else:
        if request.user.is_authenticated:
            if request.method == "GET":
                if user_id != request.user.id and not request.user.is_staff:
                    return HttpResponse("You don't have permissions")
                projects = Project.objects.filter(participants=user_id)
                data = serializers.serialize('json', projects)
                return HttpResponse(data)


@csrf_exempt
def project_view(request, project_id, user_id='default'):
    if user_id == 'default':
        if request.user.is_authenticated:
            if request.method == "GET":
                project = Project.objects.filter(participants=request.user.id, id=project_id)
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
                if 'users' in request.POST:
                    participants = request.POST['users'].split()
                    participants = [(User.objects.get(username=participant)) for participant in participants]
                    profiles = [Profile.objects.get(user=participant) for participant in participants]
                    if profiles:
                        [new_project.participants.add(profiles[i].user.id) for i in range(len(profiles))]
                return HttpResponse("Success")

            elif request.method == "DELETE":
                project = Project.objects.get(participants=request.user.id, id=project_id)
                project.delete()
                return HttpResponse("Success")

    else:
        if request.user.is_authenticated:
            if user_id != request.user.id and not request.user.is_staff:
                return HttpResponse("You don't have permissions")
            if request.method == "GET":
                project = Project.objects.filter(participants=user_id, id=project_id)
                data = serializers.serialize('json', project)
                return HttpResponse(data)
            elif request.method == "POST":
                if user_id != request.user.id:
                    return HttpResponse("You don't have permissions")

                new_project = Project.objects.filter(id = project_id)
                if 'name' in request.POST:
                    name = request.POST['name']
                    new_project.update(name = name)
                if 'tasks' in request.POST:
                    tasks = request.POST['tasks']
                    new_project.update(tasks = tasks)
                if 'status' in request.POST:
                    status = request.POST['status']
                    new_project.update(is_done = status)
                if 'users' in request.POST:
                    participants = request.POST['users'].split()
                    participants = [(User.objects.get(username=participant)) for participant in participants]
                    profiles = [Profile.objects.get(user=participant) for participant in participants]
                    if profiles:
                        [new_project.participants.add(profiles[i].user.id) for i in range(len(profiles))]
                return HttpResponse("Success")

            elif request.method == "DELETE":
                project = Project.objects.get(participants=user_id, id=project_id)
                project.delete()
                return HttpResponse("Success")