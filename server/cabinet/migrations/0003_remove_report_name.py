# Generated by Django 3.0.5 on 2020-05-13 15:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cabinet', '0002_auto_20200513_1537'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='report',
            name='name',
        ),
    ]