from rest_framework import serializers

from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=False)
    status_name = serializers.SerializerMethodField()

    class Meta:
        model = Task
        fields = ('id', 'dead_line', 'description', 'status', 'title', 'email', 'created_at', 'status_name')
        read_only_fields = ('id', 'created_at', 'updated_at', 'status_name')

    def get_status_name(self, obj):
        return obj.get_status_display()

    def validate(self, attrs):
        request_method = self.context['request'].method
        if request_method == 'PUT':
            allowed_fields = {'title', 'description'}
            for field in attrs.keys():
                if field not in allowed_fields:
                    raise serializers.ValidationError({field: "Este campo no se puede actualizar."})
        return attrs
