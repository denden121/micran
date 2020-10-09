from ..models import Profile, Direction, Project


def get_project(project_id):
    project = Project.objects.get(id=project_id)
    manager = Profile.objects.get(pk=project.manager)
    manager_name = manager.last_name + ' ' + manager.first_name + ' ' + manager.middle_name
    chief_designer = Profile.objects.get(pk=project.chief_designer)
    chief_designer_name = chief_designer.last_name + ' ' + chief_designer.first_name + \
                          ' ' + chief_designer.middle_name
    deputy_chief_designer = Profile.objects.get(pk=project.deputy_chief_designer)
    deputy_chief_designer_name = deputy_chief_designer.last_name + ' ' + deputy_chief_designer.first_name \
                                 + ' ' + deputy_chief_designer.middle_name
    direction = Direction.objects.get(pk=project.direction.pk)
    data = {'pk': project.pk, 'name': project.name,
            'direction': direction.name,
            'direction_pk': direction.pk,
            'manager': manager_name,
            'manager_pk': manager.pk,
            'deputy_chief_designer': deputy_chief_designer_name,
            'deputy_chief_designer_pk': deputy_chief_designer.pk,
            'chief_designer': chief_designer_name,
            'chief_designer_pk': chief_designer.pk,
            'production_order': project.production_order,
            'comment_for_employees': project.comment_for_employees,
            'contract': project.contract, 'type': project.type, 'status': project.status,
            'client': project.client,
            'report_availability': project.report_availability, 'acceptance_vp': project.acceptance_vp}
    return data


def get_projects():
    projects = Project.objects.all().order_by('id')
    data = []
    for project in projects:
        manager = Profile.objects.get(pk=project.manager)
        manager_name = manager.last_name + ' ' + manager.first_name + ' ' + manager.middle_name
        chief_designer = Profile.objects.get(pk=project.chief_designer)
        chief_designer_name = chief_designer.last_name + ' ' + chief_designer.first_name + ' ' + chief_designer.middle_name
        deputy_chief_designer = Profile.objects.get(pk=project.deputy_chief_designer)
        deputy_chief_designer_name = deputy_chief_designer.last_name + ' ' + deputy_chief_designer.first_name + ' ' + deputy_chief_designer.middle_name
        direction = Direction.objects.get(pk=project.direction.pk)
        field = {'name': project.name, 'direction': direction.name, 'manager': manager_name,
                 'deputy_chief_designer': deputy_chief_designer_name, 'chief_designer': chief_designer_name,
                 'production_order': project.production_order,
                 'comment_for_employees': project.comment_for_employees,
                 'contract': project.contract, 'type': project.type, 'status': project.status,
                 'client': project.client,
                 'report_availability': project.report_availability, 'acceptance_vp': project.acceptance_vp}
        data.append({'pk': project.pk, 'fields': field})
    return data
