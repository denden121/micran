# Generated by Django 3.0 on 2020-07-22 03:00

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('cabinet', '0021_auto_20200721_0600'),
    ]

    operations = [
        migrations.AddField(
            model_name='salarycommon',
            name='date',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now, unique=True),
            preserve_default=False,
        ),
    ]