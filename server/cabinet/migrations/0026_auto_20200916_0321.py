# Generated by Django 3.0 on 2020-09-16 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cabinet', '0025_remove_groupaction_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='part_time_job',
            field=models.BooleanField(blank=True, default='False'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='shift',
            field=models.BooleanField(blank=True, default='False'),
        ),
    ]