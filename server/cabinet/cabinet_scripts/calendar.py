from ..models import Profile, CalendarMark
from datetime import date


def get_calendar(subdepartment, current_date, interval):
    month, year = current_date.split('-')
    profiles = Profile.objects.filter(department=subdepartment)
    output = "Empty"
    if interval == "month":
        output = []
        for profile in profiles:
            calendars = CalendarMark.objects.filter(person=profile, start_date__month=month,
                                                    start_date__year=year)
            data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            for calendar in calendars:
                if calendar.type == 'undefined':
                    data[calendar.start_date.day - 1:calendar.end_date.day] = [1] * (
                            (calendar.end_date.day - calendar.start_date.day) + 1)
                if calendar.type == 'paid_holiday':
                    data[calendar.start_date.day - 1:calendar.end_date.day] = [2] * (
                            (calendar.end_date.day - calendar.start_date.day) + 1)
                if calendar.type == 'unpaid_holiday':
                    data[calendar.start_date.day - 1:calendar.end_date.day] = [3] * (
                            (calendar.end_date.day - calendar.start_date.day) + 1)
                if calendar.type == 'sick_leave':
                    data[calendar.start_date.day - 1:calendar.end_date.day] = [4] * (
                            (calendar.end_date.day - calendar.start_date.day) + 1)
                if calendar.type == 'hooky':
                    data[calendar.start_date.day - 1:calendar.end_date.day] = [5] * (
                            (calendar.end_date.day - calendar.start_date.day) + 1)
                if calendar.type == 'event':
                    data[calendar.start_date.day - 1:calendar.end_date.day] = [6] * (
                            (calendar.end_date.day - calendar.start_date.day) + 1)
                if calendar.type == 'study_holiday':
                    data[calendar.start_date.day - 1:calendar.end_date.day] = [7] * (
                            (calendar.end_date.day - calendar.start_date.day) + 1)
                if calendar.type == 'planned_holiday':
                    data[calendar.start_date.day - 1:calendar.end_date.day] = [8] * (
                            (calendar.end_date.day - calendar.start_date.day) + 1)
            output.append({'pk': profile.pk,
                           'name': ' '.join([profile.first_name, profile.last_name, profile.middle_name]),
                           'fields': data})
    elif interval == "year":
        output = []
        for profile in profiles:
            calendars = CalendarMark.objects.filter(person=profile, start_date__month=month,
                                                    start_date__year=year)
            data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            for calendar in calendars:
                start_week = date(calendar.start_date.year, calendar.start_date.month,
                                  calendar.start_date.day).isocalendar()[1]
                end_week = date(calendar.end_date.year, calendar.end_date.month,
                                calendar.end_date.day).isocalendar()[1]
                if calendar.type == 'undefined':
                    data[start_week - 1:end_week] = [1] * (
                            (end_week - start_week) + 1)
                if calendar.type == 'paid_holiday':
                    data[start_week - 1:end_week] = [2] * (
                            (end_week - start_week) + 1)
                if calendar.type == 'unpaid_holiday':
                    data[start_week - 1:end_week] = [3] * (
                            (end_week - start_week) + 1)
                if calendar.type == 'sick_leave':
                    data[start_week - 1:end_week] = [4] * (
                            (end_week - start_week) + 1)
                if calendar.type == 'hooky':
                    data[start_week - 1:end_week] = [5] * (
                            (end_week - start_week) + 1)
                if calendar.type == 'event':
                    data[start_week - 1:end_week] = [6] * (
                            (end_week - start_week) + 1)
                if calendar.type == 'study_holiday':
                    data[start_week - 1:end_week] = [7] * (
                            (end_week - start_week) + 1)
                if calendar.type == 'planned_holiday':
                    data[start_week - 1:end_week] = [8] * (
                            (end_week - start_week) + 1)
            output.append({'pk': profile.pk,
                           'name': ' '.join([profile.first_name, profile.last_name, profile.middle_name]),
                           'fields': data})
    return output
