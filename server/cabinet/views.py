from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token
from json import dumps
from django.contrib.auth.decorators import login_required
from .models import Profile, Project
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from rest_framework_simplejwt.authentication import JWTAuthentication 

@csrf_exempt
def cabinet(request):
    token = request.POST['token']
    validated_token = JWTAuthentication().get_validated_token(token)
    user = JWTAuthentication().get_user(validated_token)
    if user:
        profile = Profile.objects.filter(user=user)
        return HttpResponse(profile.values('group', 'sex', 'subdivision', 'birth_date', 'position', 'experience', 'shift', 'part_time_job', 'lateness'))
    else:
        return HttpResponse("Fail")


@csrf_exempt
def logout_view(request):
    if request.user.is_authenticated:
        logout(request)
        return HttpResponse("Succes")
    else:
        return HttpResponse("Already logged out")


@ensure_csrf_cookie
def test_1(request):
    if request.method =='POST':
        return HttpResponse('KLKLKLKLLK')
    return HttpResponse()
