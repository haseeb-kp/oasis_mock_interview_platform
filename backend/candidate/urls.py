from django.urls import re_path
from . import views


urlpatterns = [
    re_path(r'^login/$',views.MyTokenObtainPairView.as_view()),
    re_path(r'^users/$',views.UserList.as_view()),
    re_path(r'^signup/$',views.signup.as_view()),
    # re_path(r'^contractor/(?P<pk>.*)/$', views.contractor),
    ]