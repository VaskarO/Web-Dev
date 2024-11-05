from django.urls import path, include
from . import views
app_name = 'base'
urlpatterns = [
    path('', views.home, name="home"),
    path('group/login/', views.loginPage, name="login"),
    path('group/register/', views.registerUser, name="register"),
    path('group/logout/', views.logoutUser, name="logout"),
    # path('group/', views.group, name= "group"), 
    path('group/<str:key>', views.group, name= "group"),
    path('profile/<str:key>', views.userProfile, name= "user_profile"),
    path('group/update-group/<str:key>', views.updateGroup, name= "update"),
    path('group/create-group/', views.createGroup, name= "create"),
    path('group/delete-group/<str:key>', views.deleteGroup, name= "delete"),
    path('group/delete_message/<str:key>', views.deleteMessage, name= "delete_message"),
]