# Generated by Django 3.0 on 2020-09-17 04:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cabinet', '0028_auto_20200917_0317'),
    ]

    operations = [
        migrations.AlterField(
            model_name='action',
            name='action',
            field=models.CharField(blank=True, max_length=30, unique=True),
        ),
        migrations.AlterField(
            model_name='action',
            name='num',
            field=models.IntegerField(unique=True),
        ),
    ]
