from .models import Department, Profile, Report, SalaryIndividual, TimeCard, SalaryCommon


def get_salary_fields(user, month, year):
    salary_common, created_c = SalaryCommon.objects.get_or_create(date__month=month, date__year=year)
    salary, created_i = SalaryIndividual.objects.get_or_create(date__month=month, date__year=year, person=user)
    data = {'work_days': salary.days_worked, 'hours_worked': salary.time_from_report,
            'time_norm': salary.time_norm, 'penalty': salary.penalty,
            'is_penalty': salary.is_penalty,
            'time_off': salary.time_off, 'plan_salary': salary.plan_salary,
            'award': salary.award, 'salary_hand': salary.salary_hand,
            'days_norm': salary_common.days_norm_common,
            'time_norm': salary_common.time_norm_common}
    return data


def get_endpoint_department(data, output):
    if 'subdepartments' in data:
        fields = {"pk": data["pk"], "code": data["code"], "name": data["name"], "users": data["users"]}
        output.append(fields)
        for i in range(len(data['subdepartments'])):
            get_endpoint_department(data['subdepartments'][i], output)
        return output
    else:
        output.append(data)
        return output


def build_level(subdepartment_id, lvl):
    department = Department.objects.get(pk=subdepartment_id)
    data = {'lvl': lvl, 'name': department.department_name, 'code': department.department_code}
    subdepartments_objects = []
    subdepartments = Department.objects.filter(subdepartment_code=department.department_code)
    if subdepartments:
        for subdepartment in subdepartments:
            subdepartments_objects.append(build_level(subdepartment.pk, lvl + 1))
        data['subdepartments'] = subdepartments_objects
        return data
    else:
        return data


def build_level_with_user(subdepartment_id, lvl, date, only_user=0, salary=0):
    department = Department.objects.get(pk=subdepartment_id)
    if int(department.subdepartment_code) > 0:
        lvl += 1
    # if lvl == 0:
    #     data = {}
    # else:
    data = {'name': department.department_name, 'code': department.department_code, 'pk': department.pk}
    subdepartments_objects = []
    users = []
    month, year = date.split('-')
    subdepartments = Department.objects.filter(subdepartment_code=department.department_code)
    profiles = Profile.objects.filter(department=department)
    for worker in profiles:
        users_field = {'name': ' '.join([worker.first_name, worker.last_name, worker.middle_name]),
                       'SRI_SAS': worker.SRI_SAS, 'pk': worker.pk}
        if only_user:
            continue
        reports = Report.objects.filter(date__month=month, date__year=year, creator_id=worker.pk)
        if reports:
            users_field['has_report'] = True
        else:
            users_field['has_report'] = False
        report_time = 0
        flag = 0
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
        salary = SalaryIndividual.objects.filter(date__month=month, date__year=year, person=worker)
        users_field['time_report'] = report_time
        if salary:
            users_field['time_norm'] = salary[0].time_norm
        else:
            users_field['time_norm'] = 0
        users_field['time_system'] = time_system
        if salary:
            users_field['salary'] = get_salary_fields(worker, month, year)
        users.append(users_field)
    data['users'] = users
    if subdepartments:
        for subdepartment in subdepartments:
            subdepartments_objects.append(build_level_with_user(subdepartment.pk, lvl + 1, date))
        data['subdepartments'] = subdepartments_objects
        return data
    else:
        return data
