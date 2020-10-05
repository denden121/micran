from ..models import SalaryCommon, SalaryIndividual
from ..forms import SalaryCommonForm


def change_salary_common(request) -> bool:
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
        salaries = SalaryIndividual.objects.filter(date=salary.date)
        for salary in salaries:
            salary.time_norm = int(days) * 8
            salary.days_worked = int(days)
            salary.save()
        return True
    return False