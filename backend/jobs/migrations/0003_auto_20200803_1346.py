# Generated by Django 3.0.8 on 2020-08-03 13:46

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('jobs', '0002_job_applicants'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='applicants',
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
    ]
