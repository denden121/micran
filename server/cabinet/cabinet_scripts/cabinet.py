from ..models import Profile

def get_info_about_user(user_id):
    profile = Profile.objects.get(user=user_id)
    data = {'pk': profile.pk, 'fine_late': str(profile.fine_late), 'oklad': profile.oklad,
            'last_name': profile.last_name, 'first_name': profile.first_name,
            'middle_name': profile.middle_name,
            'SRI_SAS': profile.SRI_SAS, 'sex': profile.sex, 'birth_date': str(profile.birth_date),
            'experience': profile.experience, 'position': profile.position,
            'department': profile.department.department_name,
            'employment_date': str(profile.employment_date)}
    return data