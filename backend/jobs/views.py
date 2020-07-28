from rest_framework import permissions, status, generics
from rest_framework.decorators import api_view, permission_classes
from .serializers import JobSerializer
from .models import Job

class JobViewSet(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    permission_classes = [
        permissions.AllowAny
        # permissions.IsAuthenticated
    ]
    serializer_class = JobSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
