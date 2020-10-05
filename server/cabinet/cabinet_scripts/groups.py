from ..models import Group, GroupAction


def get_group(group_id):
    group = Group.objects.get(pk=group_id)
    actions_group = group.actions.all()
    participants = group.participants.all()
    group_actions = GroupAction.objects.all()
    users = []
    for profile in participants:
        users.append({'name': profile.first_name + ' ' + profile.last_name + ' ' + profile.middle_name,
                      'pk': profile.pk})
    group_actions_output = []
    for group_action in group_actions:
        actions_output = []
        for action in group_action.available_actions.all():
            if action in actions_group:
                actions_output.append({'pk': action.pk, 'name': action.action,
                                       'code': action.num, 'checked': True})
            else:
                actions_output.append({'pk': action.pk, 'name': action.action,
                                       'code': action.num, 'checked': False})
        group_actions_output.append({'pk': group_action.pk, 'name':group_action.name, 'actions':actions_output})
    data = {'pk': group.pk, 'name': group.name,
            'description': group.description, 'users': users, 'groups_actions': group_actions_output}
    return data


def get_groups():
    groups = Group.objects.all().order_by('pk')
    data = []
    for group in groups:
        profiles = group.participants.all()
        users = []
        actions = group.actions.all()
        actions_output = []
        for profile in profiles:
            users.append(profile.first_name + ' ' + profile.last_name + ' ' + profile.middle_name)
        for action in actions:
            actions_output.append(action.action + ' ' + str(action.num))
        fields = {'name': group.name, 'users': users, 'description': group.description,
                  'actions': actions_output}
        data.append({'pk': group.pk, 'fields': fields})
    return data