from django.contrib import admin as django_admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('django_admin/', django_admin.site.urls),
    path('api/candidate/', include('candidate.urls')),

    # path('api/admins/', include('admins.urls')),
    # path('api/interviewer/', include('interviewer.urls')),
    
    ] 

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)