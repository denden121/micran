# Generated by Django 3.0.5 on 2020-05-13 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cabinet', '0003_remove_report_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='participants',
        ),
        migrations.AddField(
            model_name='project',
            name='participants',
            field=models.ManyToManyField(to='cabinet.Profile'),
        ),
    ]