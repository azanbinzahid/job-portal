# Generated by Django 3.0.8 on 2020-09-11 13:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0004_auto_20200805_1000'),
    ]

    operations = [
        migrations.RenameField(
            model_name='qualification',
            old_name='education',
            new_name='name',
        ),
    ]
