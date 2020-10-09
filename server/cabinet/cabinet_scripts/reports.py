from ..models import Report, SalaryCommon, TimeCard, Profile
import simplejson as json
from django.http.response import HttpResponse
from ..forms import ReportForm


def get_reports(month, year, user_id):
    reports = Report.objects.filter(creator_id=user_id, date__month=month, date__year=year).order_by('id')
    salary = SalaryCommon.objects.filter(date__year=year, date__month=month).order_by('id')
    data = []
    status = False
    time_report = 0
    for report in reports:
        fields = {'project_name': report.project.name, 'text': report.text, 'hour': report.hour,
                  'project_pk': report.project.pk}
        status = report.status
        time_report += report.hour
        data.append({'pk': report.pk, 'fields': fields})
    times_cards = TimeCard.objects.filter(date__month=month, date__year=year, user=user_id)
    time_system = 0
    for time_card in times_cards:
        time_system += time_card.hours_worked.hour
    output = {'time_system': time_system, 'reports': data, 'status': status, 'time_report': time_report}
    if salary:
        output['time_norm'] = salary[0].time_norm_common
    else:
        output['time_norm'] = ''
    return output


def get_reports_for_worker(date, person_id):
    month, year = date.split('-')
    data = []
    time_report = 0
    output = {}
    status = False
    profile = Profile.objects.get(pk=person_id)
    reports = Report.objects.filter(creator_id=profile, date__month=month, date__year=year)
    for report in reports:
        data.append({'pk': report.pk, 'hours': report.hour, 'project': report.project.name,
                     'text': report.text, 'project_pk': report.project.pk})
        time_report += report.hour
        status = report.status
    times_cards = TimeCard.objects.filter(date__month=month, date__year=year, user=person_id)
    time_system = 0
    for time_card in times_cards:
        time_system += time_card.hours_worked.hour
    output['time_report'] = time_report
    output['status'] = status
    output['name'] = ' '.join([profile.first_name, profile.last_name, profile.middle_name])
    output['time_system'] = time_system
    output['date'] = date
    output['pk'] = profile.pk
    output['reports'] = data
    return output


def create_reports(request, user):
    profile = Profile.objects.get(user=user)
    project_pk = request.POST.get('project')
    date = request.POST.get('date')
    year, month, day = date.split('-')
    reports = Report.objects.filter(creator_id=user.id, date__year=year,
                                    date__month=month, project=project_pk)
    if reports:
        return HttpResponse("Already have a report")
    form = ReportForm(request.POST)
    if form.is_valid():
        report = form.save(commit=False)
        report.creator_id = profile
        report.save()
        data = []
        fields = {'project_name': report.project.name, 'text': report.text, 'hour': report.hour,
                  'project_pk': report.project.pk}
        data.append({'pk': report.pk, 'fields': fields, 'status': report.status})
        return HttpResponse(json.dumps(data[0], ensure_ascii=False).encode('utf8'))
    return HttpResponse("Fail")