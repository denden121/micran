from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token

def index(request):
    return render(request,'main/index.html')

@csrf_exempt
def login(request):
    username = request.POST['username']
    password = request.POST['password']
    csrf_token = get_token(request)
    print(password)
    user = authenticate(username=username, password=password)
    if user is not None:
        return HttpResponse('success')
    else:
        return HttpResponse('fail')