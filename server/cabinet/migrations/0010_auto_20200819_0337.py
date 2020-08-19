# Generated by Django 3.0 on 2020-08-19 03:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cabinet', '0009_calendarmark_person'),
    ]

    operations = [
        migrations.RenameField(
            model_name='direction',
            old_name='direction',
            new_name='direction_name',
        ),
        migrations.RemoveField(
            model_name='direction',
            name='num',
        ),
        migrations.AddField(
            model_name='direction',
            name='direction_code',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='profile',
            name='direction',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='direction', to='cabinet.Direction'),
        ),
    ]
