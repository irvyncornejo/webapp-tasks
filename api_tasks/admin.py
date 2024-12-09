from django.contrib import admin
from django.contrib.admin import SimpleListFilter
from .models import Task


class TasksFilter(SimpleListFilter):
    title = 'Tasks Filter'
    parameter_name = 'tasks_status'

    def lookups(self, request, model_admin):
        return (
            ('status', 'Status'),
            ('owner', 'Owner'),
            ('dead_line', 'Dead Line')
        )

    def queryset(self, request, queryset):
        if self.value():
            return queryset.filter(project_name=self.value())
        else:
            return queryset

class Filter(admin.ModelAdmin):
    list_filter = ('status', 'owner', 'dead_line')

admin.site.register(Task, Filter)
