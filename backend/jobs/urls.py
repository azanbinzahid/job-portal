from django.urls import path
from .views import current_user, UserList, JobViewSet

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('all/', JobViewSet.as_view()),
]
