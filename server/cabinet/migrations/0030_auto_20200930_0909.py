# Generated by Django 3.0 on 2020-09-30 09:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cabinet', '0029_auto_20200917_0401'),
    ]

    operations = [
        migrations.RenameField(
            model_name='direction',
            old_name='direction_code',
            new_name='code',
        ),
        migrations.RenameField(
            model_name='direction',
            old_name='direction_name',
            new_name='name',
        ),
    ]
