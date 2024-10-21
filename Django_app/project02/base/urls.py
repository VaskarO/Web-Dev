from django.urls import path, include
from . import views
app_name = 'base'
urlpatterns = [
    path('', views.home, name="home"),
    # path('group/', views.group, name= "group"),
    path('group/<str:key>', views.group, name= "group"),
    path('group/create-group/', views.createGroup, name= "create")
]