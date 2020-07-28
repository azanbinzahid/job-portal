from django.urls import path
from .views import JobViewSet

urlpatterns = [
    path('', JobViewSet.as_view()),
]
