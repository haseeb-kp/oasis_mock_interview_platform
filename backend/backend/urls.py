from django.contrib import admin as django_admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('django_admin/', django_admin.site.urls),
    # path('admin/', include('admins.urls')),
    # path('candidate/', include('candidate.urls')),
    # path('interviewer/', include('interviewer.urls')),
    
    ] + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)