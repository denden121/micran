# Generated by Django 3.0 on 2020-08-18 03:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cabinet', '0004_auto_20200818_0334'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='sex',
            field=models.CharField(blank=True, max_length=10),
        ),
    ]
