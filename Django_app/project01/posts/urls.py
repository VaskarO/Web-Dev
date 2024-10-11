from django.urls import path
from . import views

urlpatterns = [
    path("", views.post_list, name = "posts"),
    path("<slug:post_slug>", views.post_page, name= "page")
]
