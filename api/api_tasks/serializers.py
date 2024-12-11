from rest_framework import serializers

from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=False)
    class Meta:
        model = Task
        fields = ('id', 'dead_line', 'description', 'status', 'title', 'email', 'created_at')
        read_only_fields = ('id', 'created_at', 'updated_at')

    def validate(self, attrs):
        request_method = self.context['request'].method
        if request_method == 'PUT':
            allowed_fields = {'title', 'description'}
            for field in attrs.keys():
                if field not in allowed_fields:
                    raise serializers.ValidationError({field: "Este campo no se puede actualizar."})
        return attrs
