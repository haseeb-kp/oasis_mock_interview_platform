# Generated by Django 3.2.18 on 2023-02-25 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('candidate', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidate',
            name='username',
            field=models.CharField(blank=True, max_length=256, null=True, unique=True),
        ),
    ]