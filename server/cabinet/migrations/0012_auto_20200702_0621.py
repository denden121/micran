# Generated by Django 3.0 on 2020-07-02 06:21

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('cabinet', '0011_group_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='report',
            name='date',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterUniqueTogether(
            name='action',
            unique_together={('action',)},
        ),
        migrations.AlterUniqueTogether(
            name='profile',
            unique_together={('first_name', 'last_name', 'middle_name')},
        ),
    ]
