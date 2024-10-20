from django.shortcuts import render
from django.http import HttpResponse
from .models import Group
from .forms import GroupForm
# Create your views here.
# groups = [
#     {"id":1, "name": 'group1', "desc":"group1 desc"},
#     {"id":2, "name": 'group2', "desc":"group2 desc"},
#     {"id":3, "name": 'group3', "desc":"group3 desc"},
#     {"id":4, "name": 'group4', "desc":"group4 desc"},
# ]

def home(request):
    groups = Group.objects.all()
    return render(request, 'index.html', {"groups":groups})

def group(request, key):
    group = Group.objects.get(id=key)
    return render(request, 'group.html', {"group":group})
    # for group in groups:
    #     if group['id'] == int(key):
    #         return render(request, 'group.html', {"group":group})

# def group_by_id(request, key):
#     return HttpResponse(key)
#     # return render(request, 'group.html')

def createGroup(request):
    return render(request, 'group_form.html', {'form':GroupForm})