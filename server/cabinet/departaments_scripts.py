from .models import Department, Profile, Report, SalaryIndividual, TimeCard, SalaryCommon
from datetime import datetime
from datetime import date as dt

def get_salary_fields(user, month, year):
    salary_common, created_c = SalaryCommon.objects.get_or_create(date__month=month, date__year=year)
    salary, created_i = SalaryIndividual.objects.get_or_create(date__month=month, date__year=year, person=user)
    data = {'work_days': salary.days_worked, 'hours_worked': salary.time_from_report,
            'time_norm_individual': salary.time_norm, 'penalty': salary.penalty,
            'is_penalty': salary.is_penalty,
            'time_off': salary.time_off, 'plan_salary': salary.plan_salary,
            'award': salary.award, 'salary_hand': salary.salary_hand,
            'days_norm': salary_common.days_norm_common,
            'time_norm': salary_common.time_norm_common}
    return data


def get_endpoint_department(data, output, only_user=0):
    if 'subdepartments' in data:
        fields = {"pk": data["pk"], "code": data["code"], "name": data["name"]}
        try:
            fields["users"] = data["users"]
        except KeyError:
            pass
        if only_user != 0:
            if only_user != 0:
                if data["users"]:
                    for field in data["users"]:
                        output.append(field)
        else:
            output.append(fields)
        for i in range(len(data['subdepartments'])):
            get_endpoint_department(data['subdepartments'][i], output, only_user)
        return output
    else:
        if only_user != 0:
            if data["users"]:
                for field in data["users"]:
                    output.append(field)
        else:
            output.append(data)
        return output



def build_level_with_user(subdepartment_id, lvl, date='default', only_user=0, salary_flag=0):
    department = Department.objects.get(pk=subdepartment_id)
    if int(department.subdepartment_code) > 0:
        lvl += 1
    # if lvl == 0:
    #     data = {}
    # else:
    data = {'name': department.department_name, 'code': department.department_code, 'pk': department.pk}
    subdepartments_objects = []
    if date != 'default':
        month, year = date.split('-')
    subdepartments = Department.objects.filter(subdepartment_code=department.department_code)
    if only_user != 0:
        users = []
        profiles = Profile.objects.filter(department=department)
        for worker in profiles:
            users_field = {'name': ' '.join([worker.first_name, worker.last_name, worker.middle_name]),
                           'SRI_SAS': worker.SRI_SAS, 'pk': worker.pk}
            report_time = 0
            flag = 0
            if date == "default":
                month, year = datetime.now().month, datetime.now().year
                date_ = dt(year=datetime.now().year, month=datetime.now().month, day=1)
            else:
                date_ = dt(year=int(year), month=int(month), day=1)
            salary, created = SalaryIndividual.objects.get_or_create(date=date_, person=worker)
            if salary_flag != 1:
                reports = Report.objects.filter(date__month=month, date__year=year, creator_id=worker.pk)
                if reports:
                    users_field['has_report'] = True
                else:
                    users_field['has_report'] = False
                for report in reports:
                    if report.status and flag != 2:
                        flag = 1
                    if flag == 1:
                        users_field[
                            'banned'] = ' '.join([report.ban_id.first_name,
                                                  report.ban_id.last_name, report.ban_id.middle_name])
                        users_field['report_status'] = report.status
                        if report.check:
                            users_field[
                                'checker'] = ' '.join([report.check_id.first_name,
                                                       report.check_id.last_name, report.check_id.middle_name])
                        flag = 1
                    report_time += report.hour
                if flag == 0:
                    users_field['banned'] = ''
                    users_field['checker'] = ''
                times_cards = TimeCard.objects.filter(date__month=month, date__year=year, user=worker.user.pk)
                time_system = 0
                for time_card in times_cards:
                    time_system += time_card.hours_worked.hour
                users_field['time_report'] = report_time
                users_field['time_system'] = time_system
                if salary:
                    users_field['time_norm'] = salary[0].time_norm
                else:
                    users_field['time_norm'] = 0
            if salary_flag == 1:
                users_field['position'] = worker.position
                users_field.update(get_salary_fields(worker, month, year))
            users.append(users_field)
        data['users'] = users
    if subdepartments:
        for subdepartment in subdepartments:
            subdepartments_objects.append(build_level_with_user(subdepartment.pk, lvl + 1, date, only_user, salary_flag))
        data['subdepartments'] = subdepartments_objects
        return data
    else:
        return data
