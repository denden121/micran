from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token
from json import dumps
from django.contrib.auth.decorators import login_required
from .models import Profile, Project
from django.contrib.auth.models import User


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
