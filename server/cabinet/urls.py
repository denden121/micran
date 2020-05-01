from django.urls import path, include
# from rest_framework.authtoken.views import obtain_auth_token

from . import views

urlpatterns = [
    path('cabinet/', views.cabinet),
    path('logout/', views.logout_view),
    # path('login/', obtain_auth_token),
    path('test/', views.test),
    path('test1/',views.test_1)
]