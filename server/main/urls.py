from django.contrib import admin, auth
from django.urls import path, include


urlpatterns = [
    path('', include('cabinet.urls')),
    path('admin/', admin.site.urls),
]
