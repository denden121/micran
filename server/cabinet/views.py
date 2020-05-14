from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Profile, Project, Report
from django.contrib.auth.models import User
from django.core import serializers
from json import dumps
from rest_framework_simplejwt.authentication import JWTAuthentication 

@csrf_exempt
def cabinet_view(request,user_id):
    token = request.headers.get('Authorization')
    validated_token = JWTAuthentication().get_validated_token(token)
    user = JWTAuthentication().get_user(validated_token)
    if user and user.id == user_id or user.is_staff:
        profile = Profile.objects.filter(user=user)
        data = serializers.serialize('json', profile)
        return HttpResponse(data)
    else:
        return HttpResponse("Fail")

@csrf_exempt
def cabinet_view_without_id(request):
    token = request.headers.get('Authorization')
    validated_token = JWTAuthentication().get_validated_token(token)
    user = JWTAuthentication().get_user(validated_token)
    if user:
        profile = Profile.objects.filter(user=user)
        return redirect(str(user.id) + '/')
    else:
        return HttpResponse("Fail")

@csrf_exempt
def all_report_view(request, user_id):
    token = request.headers.get('Authorization')
    validated_token = JWTAuthentication().get_validated_token(token)
    user = JWTAuthentication().get_user(validated_token)
    if request.method == "GET":
        if user_id != user.id and not user.is_staff:
            return HttpResponse("You dont have permissions")
        reports = Report.objects.filter(creator_id=user_id)
        data = serializers.serialize('json', reports)
        return HttpResponse(data)


@csrf_exempt
def add_report_view(request):
    token = request.headers.get('Authorization')
    validated_token = JWTAuthentication().get_validated_token(token)
    user = JWTAuthentication().get_user(validated_token)
    if request.method == "POST":
        # name = request.POST['name']
        project = request.POST['project']
        text = request.POST['text']
        curator = request.POST['curator']
        hour = request.POST['hour']
        #project = Project.objects.get(name=project)
        profile = Profile.objects.get(user=user)
        #curator_profile = Profile.objects.get(user=curator)
        if project:
            new_report = Report.objects.create(project = project, text = text, hour = hour, creator_id=profile, curator = curator)
            new_report.save()
            return HttpResponse("Succesfull")
        return HttpResponse("Something went wrong")
        

@csrf_exempt
def report_view(request, user_id, report_id):
    token = request.headers.get('Authorization')
    validated_token = JWTAuthentication().get_validated_token(token)
    user = JWTAuthentication().get_user(validated_token)
    if user_id != user.id and not user.is_staff:
        return HttpResponse("You dont have permissions")
    if request.method == "GET":
        report = Report.objects.filter(user=user_id, id=report_id)
        data = serializers.serialize('json', report)
        return HttpResponse(data)
    elif request.method == "POST":
        if user_id != user.id:
            return HttpResponse("You dont have permissions")
     
        new_report = Report.objects.filter(id = report_id)
        # if 'name' in request.POST:
            # name = request.POST['name']
            # new_report.update(name = name)
        if 'text' in request.POST:
            text = request.POST['text']
            new_report.update(text = text)
        if 'hour' in request.POST:
            hour = request.POST['hour']
            new_report.update(hour = hour)
        return HttpResponse("Succesfull")

    elif request.method == "DELETE":
        report = Report.objects.get(user=user_id, id=report_id)
        report.delete()
        return HttpResponse("Succesfull")

@csrf_exempt
def all_projects_view(request, user_id):
    token = request.headers.get('Authorization')
    validated_token = JWTAuthentication().get_validated_token(token)
    user = JWTAuthentication().get_user(validated_token)
    if request.method == "GET":
        if user_id != user.id and not user.is_staff:
            return HttpResponse("You dont have permissions")
        projects = Project.objects.filter(participants=user_id)
        data = serializers.serialize('json', projects)
        return HttpResponse(data)

@csrf_exempt
def add_projects_view(request):
    token = request.headers.get('Authorization')
    validated_token = JWTAuthentication().get_validated_token(token)
    user = JWTAuthentication().get_user(validated_token)
    if user and request.method == "POST":
        name = request.POST['name']
        tasks = request.POST['tasks']
        participants = request.POST['users'].split()
        participants = [(User.objects.get(username=participant)) for participant in participants]
        profiles = [Profile.objects.get(user=participant) for participant in participants]
        if profiles:
            new_project = Project.objects.create(name = name, tasks = tasks)
            new_project.save()
            [new_project.participants.add(profiles[i].user.id) for i in range(len(profiles))]
            return HttpResponse("Succesfull")
        return HttpResponse("Something went wrong")
        

@csrf_exempt
def project_view(request, user_id, project_id):
    token = request.headers.get('Authorization')
    validated_token = JWTAuthentication().get_validated_token(token)
    user = JWTAuthentication().get_user(validated_token)
    if user_id != user.id and not user.is_staff:
        return HttpResponse("You dont have permissions")
    if request.method == "GET":
        project = Project.objects.filter(participants=user_id, id=project_id)
        data = serializers.serialize('json', project)
        return HttpResponse(data)
    elif request.method == "POST":
        if user_id != user.id:
            return HttpResponse("You dont have permissions")
        
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
        return HttpResponse("Succesfull")

    elif request.method == "DELETE":
        project = Project.objects.get(participants=user_id, id=project_id)
        project.delete()
        return HttpResponse("Succesfull")