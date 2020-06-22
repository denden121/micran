# Generated by Django 3.0.7 on 2020-06-16 06:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cabinet', '0005_profile_group'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='group',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='cabinet.Group'),
        ),
    ]
