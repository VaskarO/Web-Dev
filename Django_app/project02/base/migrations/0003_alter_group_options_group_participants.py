# Generated by Django 5.1.2 on 2024-11-01 16:01

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0002_topic_group_host_messages_group_topic"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="group",
            options={"ordering": ["-updated", "-created"]},
        ),
        migrations.AddField(
            model_name="group",
            name="participants",
            field=models.ManyToManyField(
                blank=True, related_name="participants", to=settings.AUTH_USER_MODEL
            ),
        ),
    ]
