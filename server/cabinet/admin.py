from django.contrib import admin

from . import models

admin.site.register(models.Profile)
admin.site.register(models.Project)
admin.site.register(models.Group)
admin.site.register(models.Report)
admin.site.register(models.Action)
admin.site.register(models.Logging)
admin.site.register(models.SalaryCommon)
admin.site.register(models.SalaryIndividual)
admin.site.register(models.Department)
admin.site.register(models.Subdepartment)
admin.site.register(models.Direction)
admin.site.register(models.TimeCard)
