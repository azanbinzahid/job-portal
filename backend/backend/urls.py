from django.contrib import admin
from django.urls import include, path
from rest_framework_jwt.views import obtain_jwt_token
from django.views.static import serve
from django.conf.urls import include, url
from django.conf import settings

urlpatterns = [
    path('jobs/', include('jobs.urls')),
    path('users/', include('users.urls')),
    path('admin/', admin.site.urls),
    path('token-auth/', obtain_jwt_token,),
    url(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT,})
]
