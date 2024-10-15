from django.shortcuts import render
from django.http import HttpResponse
from .models import Post
from django.contrib.auth.decorators import login_required

# Create your views here.
def post_list(request):
    posts = Post.objects.all().order_by('-date')
    return render(request, 'posts/post_list.html', {
        'posts':posts
    })

def post_page(request, post_slug):
    post = Post.objects.get(slug= post_slug)
    return render(request, 'posts/post_page.html',{"post":post})
    # return HttpResponse(post_slug)

@login_required(login_url='/users/login/')
def post_new(request):
    new_post = "newpost"
    return render(request,'posts/post_new.html', { 'new_post': new_post})