# Generated by Django 3.0 on 2020-07-17 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cabinet', '0017_auto_20200717_0531'),
    ]

    operations = [
        migrations.AddField(
            model_name='salaryindividual',
            name='time_norm',
            field=models.FloatField(blank=True, default=1),
            preserve_default=False,
        ),
    ]
