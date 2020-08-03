from rest_framework import permissions, status, generics, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework import mixins
from .serializers import JobSerializer
from .models import Job

class JobViewSet(mixins.ListModelMixin,
                mixins.RetrieveModelMixin,
                mixins.UpdateModelMixin,
                viewsets.GenericViewSet):
    queryset = Job.objects.all()

    permission_classes_by_action = {
        'perform_update': [permissions.IsAuthenticated],
        'list': [permissions.AllowAny],
        'retrieve': [permissions.AllowAny]
        }

    serializer_class = JobSerializer
    
    
    def perform_update(self, serializer):
        instance = self.get_object()
        if(self.request.user in instance.applicants.all()):
            instance.applicants.remove(self.request.user)
        else:
            instance.applicants.add(self.request.user)

    def get_permissions(self):
        try:
            # return permission_classes depending on `action` 
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError: 
            # action is not set return default permission_classes
            return [permission() for permission in self.permission_classes]
