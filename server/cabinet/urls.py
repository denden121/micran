from django.urls import path, include

from . import views

urlpatterns = [
    path('cabinet/', views.cabinet_view),
    path('token/', views.token),
    path('cabinet/<int:user_id>/', views.cabinet_view),
    path('check/', views.check_view),
    path('cabinet/register/', views.register_view),
    # reports
    path('cabinet/<int:user_id>/reports/', views.all_report_view),
    path('cabinet/reports/', views.all_report_view),
    path('cabinet/<int:user_id>/report/<int:report_id>', views.report_view),
    path('cabinet/report/<int:report_id>', views.report_view),
    # projects
    path('cabinet/<int:user_id>/projects/', views.all_projects_view),
    path('cabinet/projects/', views.all_projects_view),
    path('cabinet/<int:user_id>/project/<int:project_id>', views.project_view),
    path('cabinet/project/<int:project_id>', views.project_view),
]
