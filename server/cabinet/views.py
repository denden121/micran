from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token
from json import dumps


@csrf_exempt
def login(request):
    username = request.POST['username']
    password = request.POST['password']
    csrf_token = get_token(request)
    print(password)
    user = authenticate(username=username, password=password)
    if user is not None:
        return HttpResponse(dumps({'first_name': user.first_name, 'last_name': user.last_name, 'email': user.email}))
    else:
        return HttpResponse('fail')
