from django.contrib import admin
from django.urls import include, path
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('jobs/', include('jobs.urls')),
    path('admin/', admin.site.urls),
    path('token-auth/', obtain_jwt_token,)
]
