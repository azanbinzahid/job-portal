from rest_framework import permissions, status, generics, viewsets
from rest_framework.decorators import api_view, permission_classes
from .serializers import JobSerializer
from .models import Job

class JobViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Job.objects.all()
    permission_classes = [
        permissions.AllowAny
        # permissions.IsAuthenticated
    ]
    serializer_class = JobSerializer
    