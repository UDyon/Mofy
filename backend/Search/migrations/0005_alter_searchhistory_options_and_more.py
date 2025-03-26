# Generated by Django 4.2.7 on 2023-11-29 14:11

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("Search", "0004_alter_searchhistory_options"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="searchhistory",
            options={
                "verbose_name": "Search History",
                "verbose_name_plural": "Search Histories",
            },
        ),
        migrations.RenameField(
            model_name="searchhistory",
            old_name="query",
            new_name="search_query",
        ),
    ]
