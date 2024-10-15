from django.urls import path
from . import views

app_name = 'posts'

urlpatterns = [
    path("", views.post_list, name = "list"),
    path("newPost/", views.post_new, name= "new"),
    path("<post_slug>", views.post_page, name= "page")
]
