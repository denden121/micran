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

@csrf_exempt
def cabinet(request):
    if request.user.is_authenticated:
        profile = Profile.objects.filter(user=request.user)
        fields = 'group' #Вводим нужные поля
        return HttpResponse(profile.values(fields))
    else:
        return HttpResponse("Fail")


@csrf_exempt
def logout_view(request):
    if request.user.is_authenticated:
        logout(request)
        return HttpResponse("Succes")
    else:
        return HttpResponse("Already logged out")

@csrf_exempt
def test(request):
    if request.method == 'POST':
        return HttpResponse("POST")
    if request.method == 'GET':
        return HttpResponse("GET")

@ensure_csrf_cookie
def test_1(request):
    if request.method =='POST':
        return HttpResponse('KLKLKLKLLK')
    return HttpResponse()
