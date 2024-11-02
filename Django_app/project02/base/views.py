from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from .models import Group, Topic, Messages
from .forms import GroupForm
# Create your views here.
# groups = [
#     {"id":1, "name": 'group1', "desc":"group1 desc"},
#     {"id":2, "name": 'group2', "desc":"group2 desc"},
#     {"id":3, "name": 'group3', "desc":"group3 desc"},
#     {"id":4, "name": 'group4', "desc":"group4 desc"},
# ]

def loginPage(request):

    if request.method == 'POST':
        username = request.POST.get('username').lower()
        password = request.POST.get('password')
        try:
            user = User.objects.get(username= username)
        except:
            return render(request, 'auth.html?error_login')
        user = authenticate(request, username= username, password= password)

        if user is not None:
            login(request, user)
            return redirect('base:home')

    return render(request, 'auth.html',{'page':'login'})

def logoutUser(request):
    logout(request)
    return redirect('base:home')

def registerUser(request):
    userFrom = UserCreationForm()
    
    if request.method=='POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
  
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            login(request, user)
            return redirect('base:home')
        else:
            return render(request,'auth.html?user_not_registered')
    return render(request,'auth.html', {'page':'register', 'form':userFrom} )

def home(request):
    query = request.GET.get('query') if request.GET.get('query') != None else ''
    print(query)
    groups = Group.objects.filter(topic__name__icontains = query)
    topics = Topic.objects.all()
    # groups = Group.objects.all()
    return render(request, 'index.html', {"groups":groups, 'topics':topics})

def group(request, key):
    group = Group.objects.get(id=key)
    messages = group.messages_set.all().order_by('-created')
    participants = group.participants.all()
    if(request.method == 'POST'):
        message= Messages.objects.create(
            user= request.user, group = group, body= request.POST.get('body')
        )
        group.participants.add(request.user)
        return redirect('base:group', key=group.id)

    return render(request, 'group.html', {"group":group, 'messages':messages,'participants':participants})
    # for group in groups:
    #     if group['id'] == int(key):
    #         return render(request, 'group.html', {"group":group})

# def group_by_id(request, key):
#     return HttpResponse(key)
#     # return render(request, 'group.html')

@login_required(login_url='login')
def createGroup(request):
    form = GroupForm()
    if request.method =='POST':
        form = GroupForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('base:home')
    return render(request, 'group_form.html', {'form':GroupForm})

def updateGroup(request, key):
    group = Group.objects.get(id = key)
    form = GroupForm(instance=group)
    if request.method == "POST":
        form = GroupForm(request.POST, instance=group)
        if form.is_valid():
            form.save()
            return redirect('base:home')
    return render(request, 'group_form.html', {'form': form})

@login_required(login_url='base:login')
def deleteGroup(request, key):
    group = Group.objects.get(id = key)

    if request.user != group.user:
        return redirect('base:home')

    if request.method =="POST":
        group.delete()
        return redirect('base:home')
    return render(request,'remove.html', {'item':group})

@login_required(login_url='base:login')
def deleteMessage(request, key):
    message = Messages.objects.get(id = key)

    if request.user != message.user:
        return redirect('base:home')

    if request.method =="POST":
        message.delete()
        return redirect('base:home')
    return render(request,'remove.html', {'item':message})
