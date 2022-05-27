from django.contrib import admin
from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'finish_date', 'deadline', 'created_date', 'user')


admin.site.register(Task, TaskAdmin)
