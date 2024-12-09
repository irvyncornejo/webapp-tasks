from django.db.models import Q
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import permission_classes, authentication_classes
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, permissions
from rest_framework.generics import ListAPIView

from .serializers import TaskSerializer
from .models import Task
from common.views import retrieve_current_user

@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
class TasksViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['owner', 'supervisor', 'status', 'dead_line']

    def get_queryset(self):
        user = retrieve_current_user(self.request.auth)
        return Task.objects.filter(Q(owner=user) | Q(supervisor=user))
