# Generated by Django 3.0.7 on 2020-06-21 12:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_post_button_url'),
    ]

    operations = [
        migrations.CreateModel(
            name='docsP',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
            ],
        ),
    ]
