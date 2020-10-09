from ..models import Profile


def format_date(date):
    if date.day < 10:
        temp_str = f'0{date.day}'
    else:
        temp_str = f'{date.day}'
    if date.month < 10:
        temp_str += f'-0{date.month}'
    else:
        temp_str += f'-{date.month}'
    return temp_str+f'-{date.year}'


def get_info_about_user(user_id):
    profile = Profile.objects.get(user=user_id)
    data = {'pk': profile.pk, 'fine_late': str(profile.fine_late), 'oklad': profile.oklad,
            'last_name': profile.last_name, 'first_name': profile.first_name,
            'middle_name': profile.middle_name, 'employment_date': format_date(profile.employment_date),
            'SRI_SAS': profile.SRI_SAS, 'sex': profile.sex, 'birth_date': format_date(profile.birth_date),
            'experience': profile.experience, 'position': profile.position}
    if profile.department:
        data['department'] = profile.department.department_name
    else:
        data['department'] = ""
    return data
