# Generated by Django 3.0 on 2020-07-09 05:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cabinet', '0005_salary_person'),
    ]

    operations = [
        migrations.AddField(
            model_name='salary',
            name='is_awarded',
            field=models.BooleanField(blank=True, default=True),
            preserve_default=False,
        ),
    ]