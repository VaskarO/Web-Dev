from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Post
from django.contrib.auth.decorators import login_required
from . import forms

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
    if request.method == 'POST':
        form = forms.NewPost(request.POST, request.FILES)
        if form.is_valid():
            newPost = form.save(commit = False)
            newPost.author = request.user
            newPost.save()
            return redirect('posts:list')
    else:
        form = forms.NewPost()
    return render(request,'posts/post_new.html', { 'form': form})