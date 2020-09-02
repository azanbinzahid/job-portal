from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet
from django.views.decorators.cache import cache_page


router = DefaultRouter()
router.register(r'', JobViewSet)

urlpatterns = [
    path('', include(router.urls))
]
