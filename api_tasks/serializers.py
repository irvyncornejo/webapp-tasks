from rest_framework import serializers

from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'dead_line', 'description' ,'created_at', 'updated_at', 'status', 'owner', 'supervisor', 'title')
        read_only_fields = ('created_at',)

