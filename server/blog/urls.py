from django.contrib import admin, auth
from django.urls import path, include
from main import views

urlpatterns = [
    path('', include('main.urls')),
    path('admin/', admin.site.urls),
    path('login/', views.login),
]
