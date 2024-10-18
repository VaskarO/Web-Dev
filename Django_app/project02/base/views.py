from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    return render(request, 'index.html')

def group(request):
    groups = [
        {"id":1, "name": 'group1', "desc":"group1 desc"},
        {"id":2, "name": 'group2', "desc":"group2 desc"},
        {"id":3, "name": 'group3', "desc":"group3 desc"},
        {"id":4, "name": 'group4', "desc":"group4 desc"},
    ]
    return render(request, 'group.html', {"groups":groups})

def group_by_id(request, key):
    return HttpResponse(key)
    # return render(request, 'group.html')