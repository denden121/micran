# Generated by Django 3.0 on 2020-07-01 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cabinet', '0010_auto_20200625_0418'),
    ]

    operations = [
        migrations.AddField(
            model_name='group',
            name='description',
            field=models.CharField(blank=True, max_length=500),
        ),
    ]