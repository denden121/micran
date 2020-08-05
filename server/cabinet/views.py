import simplejson as json
from datetime import datetime
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken

from .forms import ProjectForm, ReportForm, ProfileForm, ActionForm, GroupForm, SalaryCommonForm, SalaryIndividualForm
from .models import Profile, Project, Report, Action, Group, Logging, SalaryCommon, SalaryIndividual


def get_user_jwt(request):
    token = request.headers.get('Authorization')
    validated_token = JWTAuthentication().get_validated_token(token)
    user = JWTAuthentication().get_user(validated_token)
    return user


def get_time_from_reports(profile):
    t = datetime.now()
    reports = Report.objects.filter(creator_id=profile.user.id, date__month=t.month, date__year=t.year)
    hour = 0
    hour = sum([report.hour + hour for report in reports])
    return hour


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


def get_access(action_num, user):
    # try:
    #     Action.objects.get(group=user.profile.group, num=action_num)
    # except Action.DoesNotExist:
    #     return False
    return True


def logging(request, username, status, action):
    log = Logging.objects.create(IP=request.POST.get('IP'), login=username, status=status, action=action)


@csrf_exempt
def token(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    action = 'login'
    if user:
        status = True
        token_json = get_tokens_for_user(user)
        logging(request, username=username, status=status, action=action)
        return HttpResponse(json.dumps(token_json))
    else:
        status = False
        logging(request, username=username, status=status, action=action)
        return HttpResponse("False")


@csrf_exempt
def check_view(request):
    user = get_user_jwt(request)
    print(hasattr(user, 'profile'))
    print(user)
    return HttpResponse(hasattr(user, 'profile'))


@csrf_exempt
def check_admin_view(request):
    user = get_user_jwt(request)
    return HttpResponse(get_access(100, user))


@csrf_exempt
def cabinet_view(request, user_id='default'):
    user = get_user_jwt(request)
    if user_id == 'default':
        if not hasattr(user, 'profile'):
            return HttpResponse("Profile undefined")
        data_profile = serializers.serialize('json', [user.profile], fields=('first_name', 'last_name', 'middle_name'))
        return HttpResponse(data_profile)
    else:
        if user and (user.id == user_id or user.is_staff):
            profile = Profile.objects.filter(user=user)
            data = serializers.serialize('json', profile)
            return HttpResponse(data)
        return HttpResponse("Permission denied")


@csrf_exempt
def register_view(request):
    user = get_user_jwt(request)
    if not hasattr(user, 'profile'):
        Profile.objects.create(user=user)
    if request.method == "POST":
        form = ProfileForm(request.POST, request.FILES, instance=user.profile)
        print(form.errors)
        if form.is_valid():
            update = form.save(commit=False)
            update.user = user
            update.save()
            return HttpResponse("Success")
        return HttpResponse("Something went wrong")
    return HttpResponse('Method not allowed')


@csrf_exempt
def all_report_view(request, user_id='default'):
    user = get_user_jwt(request)
    if user_id == 'default':
        profile = Profile.objects.get(user=user)
        if user:
            if request.method == "GET":
                reports = Report.objects.filter(creator_id=user.id, date__month=request.GET['month'],
                                                date__year=request.GET['year'])
                salary = SalaryCommon.objects.filter(date__year=request.GET['year'], date__month=request.GET['month'])
                data = []
                for report in reports:
                    fields = {'project_name': report.project.name, 'text': report.text, 'hour': report.hour,
                              'status': report.status, 'project_pk': report.project.pk}
                    data.append({'pk': report.pk, 'fields': fields})
                if salary:
                    return HttpResponse(json.dumps({'time_norm': salary[0].time_norm_common, 'reports': data}))
                return HttpResponse(json.dumps({'time_norm': '', 'reports': data}))
            elif request.method == "POST":
                project_pk = request.POST.get('project')
                date = request.POST.get('date')
                year, month, day = date.split('-')
                reports = Report.objects.filter(creator_id=user.id, date__year=year,
                                                date__month=month, project=project_pk)
                if reports:
                    return HttpResponse("Already have a report")
                form = ReportForm(request.POST)
                print(form.errors)
                if form.is_valid():
                    report = form.save(commit=False)
                    report.creator_id = profile
                    print(request.POST)
                    report.save()
                    return HttpResponse("Success")
                return HttpResponse("Fail")
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")
    else:
        if user:
            if request.method == "GET":
                # if user_id != user.id:  # 11 is check reports
                #     return HttpResponse("You don't have permissions")
                reports = Report.objects.filter(creator_id=user_id)
                data = serializers.serialize('json', reports)
                return HttpResponse(data)
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")


@csrf_exempt
def report_view(request, report_id, user_id='default'):
    if user_id == 'default':
        user = get_user_jwt(request)
        if user:
            if request.method == "GET":
                report = Report.objects.filter(creator_id_id=user.id, id=report_id)
                data = serializers.serialize('json', report)
                return HttpResponse(data)
            elif request.method == "POST":
                project_pk = request.POST.get('project')
                date = request.POST.get('date')
                year, month, day = date.split('-')
                reports = Report.objects.filter(creator_id=user.id, date__year=year,
                                                date__month=month, project=project_pk)
                if reports:
                    return HttpResponse("Already have a report")
                report = Report.objects.get(creator_id_id=user.id, id=report_id)
                form = ReportForm(request.POST, request.FILES, instance=report)
                print(form.errors)
                if form.is_valid():
                    update = form.save()
                    return HttpResponse("Success")
                return HttpResponse("Fail")
            elif request.method == "DELETE":
                report = get_object_or_404(Report, pk=report_id)
                report.delete()
                return HttpResponse("Success")
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")
    else:
        user = get_user_jwt(request)
        if user:
            if request.method == "GET":
                if get_access(11, user):
                    checked_user = Profile.objects.get(pk=user_id)
                    report = Report.objects.filter(user=checked_user, id=report_id)
                    data = serializers.serialize('json', report)
                    return HttpResponse(data)
                return HttpResponse("You don't have permissions")
            return HttpResponse("Access error")
        return HttpResponse("Authentication error")


@csrf_exempt
def all_projects_view(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            projects = Project.objects.all()
            data = serializers.serialize('json', projects)
            return HttpResponse(data)
        if request.method == "POST":  # 13 is create projects
            form = ProjectForm(request.POST)
            if form.is_valid():
                form.save()
                return HttpResponse("Success")
            return HttpResponse("Something went wrong")
        return HttpResponse("Method not allowed")
    return HttpResponse("Authentication error")


@csrf_exempt
def project_view(request, project_id, user_id='default'):
    if user_id == 'default':
        user = get_user_jwt(request)
        if user:
            if request.method == "GET":
                project = Project.objects.filter(id=project_id)
                data = serializers.serialize('json', project)
                return HttpResponse(data)
            elif request.method == "POST" and get_access(13, user):
                project = Project.objects.get(id=project_id)
                form = ProjectForm(request.POST, request.FILES, instance=project)
                if form.is_valid():
                    form.save()
                    return HttpResponse("Success")
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")
    else:
        user = get_user_jwt(request)
        if user:
            if request.method == "GET" or get_access(12, user):
                project = Project.objects.filter(id=project_id)
                data = serializers.serialize('json', project)
                return HttpResponse(data)
            return HttpResponse("Method not allowed")
        return HttpResponse("Authentication error")


@csrf_exempt
def group_view(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            pk = request.GET.get('pk')
            group = Group.objects.get(pk=pk)
            actions = group.available_actions.all()
            participants = group.participants.all()
            users = []
            actions_output = []
            for profile in participants:
                users.append(profile.first_name + ' ' + profile.last_name + ' ' + profile.middle_name)
            for action in actions:
                actions_output.append(action.action + ' ' + str(action.num))
            data = {'name': group.name, 'description': group.description, 'users': users, 'actions': actions_output}
            return HttpResponse(json.dumps(data))
        if request.method == "POST":
            group = GroupForm(request.POST)
            if group.is_valid():
                update = group.save(commit=False)
                actions = request.POST['actions'].split()
                actions = [Action.objects.get(pk=int(action)) for action in actions]
                if actions and group.is_valid():
                    group = group.save()
                    [group.available_actions.add(actions[i]) for i in range(len(actions))]
                participants = request.POST['participants'].split()
                participants = [Profile.objects.get(pk=int(participant)) for participant in participants]
                if participants:
                    [group.participants.add(participants[i]) for i in range(len(participants))]
                return HttpResponse("Success")


@csrf_exempt
def action_view(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            actions = Action.objects.all()
            data = serializers.serialize('json', actions)
            return HttpResponse(data)
        if request.method == "POST":
            action = ActionForm(request.POST)
            if action.is_valid():
                action.save()
                return HttpResponse("Success")


@csrf_exempt
def available_actions(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            group = user.profile.group
            data = serializers.serialize('json', group.available_actions.all())
            return HttpResponse(data)


@csrf_exempt
def groups_with_permission(request):
    user = get_user_jwt(request)
    if request.method == "GET":
        if user and get_access(101, user):
            groups = Group.objects.all()
            data = []
            for group in groups:
                profiles = group.participants.all()
                users = []
                actions = group.available_actions.all()
                actions_output = []
                for profile in profiles:
                    users.append(profile.first_name + ' ' + profile.last_name + ' ' + profile.middle_name)
                for action in actions:
                    actions_output.append(action.action + ' ' + str(action.num))
                fields = {'name': group.name, 'users': users, 'description': group.description,
                          'actions': actions_output}
                data.append({'model': 'cabinet.group', 'pk': group.pk, 'fields': fields})
            return HttpResponse(json.dumps(data))
    if request.method == "POST":
        pk = request.POST.get('pk')
        group_obj = Group.objects.get(pk=pk)
        group = GroupForm(request.POST, instance=group_obj)
        if group.is_valid():
            update = group.save(commit=False)
            if request.POST.get('actions'):
                actions = request.POST['actions'].split()
                try:
                    actions = [Action.objects.get(pk=int(action)) for action in actions]
                except Action.DoesNotExist:
                    pass
                if actions:
                    [group_obj.available_actions.add(actions[i]) for i in range(len(actions))]
            if request.POST.get('participants'):
                participants = request.POST['participants'].split()
                try:
                    participants = [Profile.objects.get(pk=int(participant)) for participant in participants]
                except Profile.DoesNotExist:
                    pass
                if participants:
                    [group_obj.participants.add(participants[i]) for i in range(len(participants))]
            if group.is_valid():
                group.save()
                return HttpResponse("Success")
            return HttpResponse("Something went wrong")


@csrf_exempt
def logs_with_range(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            start_date = request.GET.get('start_date')
            end_date = request.GET.get('end_date')
            logs = Logging.objects.filter(date__gt=start_date,
                                          date__lte=end_date)
            data = serializers.serialize('json', logs)
            return HttpResponse(data)


@csrf_exempt
def logs(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            year = request.GET.get('year')
            month = request.GET.get('month')
            logs = Logging.objects.filter(date__month=month, date__year=year)
            data = serializers.serialize('json', logs)
            return HttpResponse(data)


@csrf_exempt
def salary(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            workers = Profile.objects.filter(departament=user.profile.departament)
            data = []
            output = []
            year = request.GET.get('year')
            month = request.GET.get('month')
            for worker in workers:
                hour = get_time_from_reports(worker)
                salary_common, cr = SalaryCommon.objects.get_or_create(date=f'{year}-{month}-1')
                salary, cr = SalaryIndividual.objects.get_or_create(person=worker, date=f'{year}-{month}-1',
                                                                    common_part=salary_common)
                salary.time_from_report = hour
                salary_common.time_norm_common = salary_common.days_norm_common * 8
                salary.days_worked = salary_common.days_norm_common - (salary.day_off +
                                                                       salary.vacation + salary.sick_leave)
                salary.time_norm = 8 * salary.days_worked
                try:
                    if salary.is_penalty:
                        salary.penalty = (salary.time_norm - salary.time_orion) * salary.plan_salary / salary.time_norm
                    salary.salary_hand = salary.plan_salary * salary.days_worked / salary_common.days_norm_common - salary.penalty + salary.award
                except ZeroDivisionError:
                    salary.penalty = 0
                    salary.salary_hand = 0
                salary.save()
                field = {'full_name': worker.last_name + ' ' + worker.first_name + ' ' + worker.middle_name,
                         'position': worker.position,
                         'work_days': salary.days_worked, 'hours_worked': salary.time_from_report,
                         'time_norm': salary.time_norm, 'penalty': salary.penalty,
                         'time_off': salary.time_off, 'plan_salary': salary.plan_salary,
                         'award': salary.award, 'salary_hand': salary.salary_hand}
                data.append({'pk': worker.pk, 'person': field})
            output.append({'fields': {'days_norm': salary_common.days_norm_common,
                                      'time_norm': salary_common.time_norm_common, 'persons': data}})
            return HttpResponse(json.dumps(output))
        if request.method == "POST":
            person = request.POST.get('person')
            person = Profile.objects.get(pk=person)
            year = request.POST.get('year')
            month = request.POST.get('month')
            salary_common = SalaryCommon.objects.get(date__year=year, date__month=month)
            salary = SalaryIndividual.objects.get(person=person, date__year=year, date__month=month)
            salary.time_from_report = get_time_from_reports(person)
            form = SalaryIndividualForm(request.POST, instance=salary)
            if form.is_valid():
                form.save()
                return HttpResponse("Success")
            return HttpResponse(form.errors.as_data())


@csrf_exempt
def salary_individual(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            person = Profile.objects.get(user=user)
            year = request.GET.get('year')
            month = request.GET.get('month')
            salary = get_object_or_404(SalaryIndividual, person=person, date__year=year, date__month=month)
            data = {'salary_hand': salary.salary_hand, 'day_off': salary.day_off, 'award': salary.award,
                    'days_worked': salary.days_worked,
                    'vacation': salary.vacation, 'sick_leave': salary.sick_leave,
                    'time_from_report': salary.time_from_report,
                    'time_orion': salary.time_orion, 'time_norm': salary.time_norm, 'time_off': salary.time_off,
                    'plan_salary': salary.plan_salary}
            return HttpResponse(json.dumps(data))


@csrf_exempt
def workers_departament(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            workers = Profile.objects.all().exclude(position="Top")
            data = serializers.serialize('json', workers)
            return HttpResponse(data)


@csrf_exempt
def managers(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            workers = Profile.objects.filter(position="Top")
            data = serializers.serialize('json', workers)
            return HttpResponse(data)


@csrf_exempt
def projects_for_reports(request):
    user = get_user_jwt(request)
    if user:
        if request.method == "GET":
            projects = Project.objects.all()
            data = []
            for project in projects:
                data.append({'pk': project.pk, 'project_name': project.name})
            return HttpResponse(json.dumps(data))


@csrf_exempt
def change_common_salary(request):
    user = get_user_jwt(request)
    if user:
        year = request.POST.get('year')
        month = request.POST.get('month')
        days = request.POST.get('days_norm_common')
        salary, created = SalaryCommon.objects.get_or_create(date=f'{year}-{month}-1')
        salary.time_norm_common = int(days) * 8
        salary.days_norm_common = days
        salary.save()
        form = SalaryCommonForm(request.POST, instance=salary)
        if form.is_valid():
            form.save()
            return HttpResponse("Success")
        return HttpResponse("Fail")
