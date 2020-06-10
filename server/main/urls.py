from django.contrib import admin, auth
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView


urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obrain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('', include('cabinet.urls')),
    path('admin/', admin.site.urls),
]
