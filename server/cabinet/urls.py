from django.urls import path, include

from . import views
urlpatterns = [
    path('cabinet/', views.cabinet_view),
    path('token/', views.token),
    path('cabinet/<int:user_id>/', views.cabinet_view),
    path('check/', views.check_view),
    path('check_admin/', views.check_admin_view),
    path('cabinet/register/', views.register_view),
    # reports
    path('cabinet/reports/', views.all_report_view),
    path('cabinet/<int:user_id>/reports/', views.all_report_view),
    path('cabinet/<int:user_id>/report/<int:report_id>/', views.report_view),
    path('cabinet/report/<int:report_id>/', views.report_view),
    path('cabinet/time_card/', views.time_control_view),
    path('cabinet/time_card/detail/', views.time_control_view_detail ),
    path('cabinet/calendar/', views.calendar_control_view),
    # projects
    path('cabinet/projects/', views.all_projects_view),
    path('cabinet/projects/simple/', views.all_projects_simple_view),
    path('cabinet/projects_for_reports/', views.projects_for_reports),
    path('cabinet/<int:user_id>/project/<int:project_id>/', views.project_view),
    path('cabinet/project/<int:project_id/>', views.project_view),
    # roles
    path('groups/', views.group_view),
    path('groups/check/', views.check_group_name),
    path('actions/', views.action_view),
    path('salary/', views.salary),
    path('salary/individual/', views.salary_individual),
    path('salary/change_common/', views.change_common_salary),
    path('workers/project/', views.workers_project),
    path('workers/project/managers/', views.managers_project),
    path('workers/all/', views.workers_info),
    path('workers/all/simple/', views.workers_info_simple),
    path('workers/managers/', views.managers),
    path('available_actions/', views.available_actions),
    path('admin/logs/', views.logs),
    path('directions/', views.direction_view),
    path('subdepartments/', views.subdepartment_view),
    path('departments/', views.departament_new_view),
    path('departments/<int:department_id>/subdepartments/', views.subdepartment_from_departments_view),
    path('departments/simple/', views.departament_simple_view),
    path('workers/subdepartments/<int:subdepartment_id>', views.workers_subdepartment),
    path('workers/departments/<int:department_id>', views.workers_department),
    path('admin/logs_with_range/', views.logs_with_range),
    path('admin/groups_admin/', views.groups_with_permission),
    path('reports/department/<int:department_id>/', views.workers_for_reports),
    path('reports/person/<int:person_id>/', views.all_reports_for_person),
]