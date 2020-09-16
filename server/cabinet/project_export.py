from .models import Project, Profile
import xlwt
#Параметры поиска в А2
#Направление в А4, выбранные направления в В4
#Проект в А5, выбранные проекты в В5
#ГК в А6, выбранные ГК в В6
#Заказчик в А7, выбранные заказчики В7
#Список выбранных проектов в А9
#С А11 по J11 [Направление, Проект, Руководитель, ГК, Заказ в пр-во, № Договора, Заказчик, Тип, Приемка ВП, Статус]
# координаты в формате строка, столбец

def export(query_project):
    wb = xlwt.Workbook()
    ws = wb.add_sheet('Worksheet')
    query_project = Project.objects.all()
    ws.write(1, 0, 'Параметры поиска')
    ws.write(3, 0, 'Направление')
    ws.write(3, 1, 'Сюда выбранные направления')
    ws.write(4, 0, 'Проект')
    ws.write(4, 1, 'Сюда выбранные проекты')
    ws.write(5, 0, 'ГК')
    ws.write(5, 1, 'Сюда выбранные конструкторы')
    ws.write(6, 0, 'Заказчик')
    ws.write(6, 1, 'Сюда выбранные заказчики')
    ws.write(8, 0, 'Список найденных проектов')
    fields = ['Направление', 'Проект', 'Руководитель', 'ГК', 'Заказ в пр-во', '№ Договора', 'Заказчик', 'Тип', 'Приемка ВП', 'Статус']
    for i in range(len(fields)):
        ws.write(10, i, fields[i])
    for i in range(len(query_project)):
        ws.write(11 + i, 0, query_project[i].direction.direction_name)
        ws.write(11 + i, 1, query_project[i].name)
        ws.write(11 + i, 2, " ".join([query_project[i].manager.last_name,
                                      query_project[i].manager.first_name, query_project[i].manager.middle_name,]))
        ws.write(11 + i, 3, " ".join([query_project[i].chief_designer.last_name,
                                      query_project[i].chief_designer.first_name, query_project[i].chief_designer.middle_name,]))
        ws.write(11 + i, 4, query_project[i].production_order)
        ws.write(11 + i, 5, query_project[i].contract)
        ws.write(11 + i, 6, query_project[i].client)
        ws.write(11 + i, 7, query_project[i].type)
        ws.write(11 + i, 8, query_project[i].acceptance_vp)
        ws.write(11 + i, 9, query_project[i].status)
    wb.save('test.xls')
    return 1