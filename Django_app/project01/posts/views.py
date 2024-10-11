from django.shortcuts import render
from django.http import HttpResponse
from .models import Post

# Create your views here.
def post_list(request):
    posts = Post.objects.all().order_by('-date')
    return render(request, 'posts/post_list.html', {
        'posts':posts
    })

def post_page(request, post_slug):
    return HttpResponse(post_slug)
