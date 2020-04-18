from django.urls import path, include

from . import views

urlpatterns = [
    path('login/', views.authentication),
    path('cabinet/', views.cabinet),
    path('logout/', views.logout_view)
]