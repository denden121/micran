from .cabinet.models import Department, Profile

def build_level(subdepartment_id, lvl):
    department = Department.objects.get(pk=subdepartment_id)
    data = {'lvl': lvl, 'name': department.department_name, 'code': department.department_code}
    subdepartments_objects = []
    subdepartments = Department.objects.filter(subdepartment_code=department.department_code)
    if subdepartments:
        for subdepartment in subdepartments:
            subdepartments_objects.append(build_level(subdepartment.pk, lvl + 1))
        data['subdepartments'] = subdepartments_objects
    else:
        return data

def departament_view(request):
    departments = Department.objects.filter(subdepartment_code='0')
    data = []
    for department in departments:
        data.append(build_level(department.id, 0))
    print(data)
