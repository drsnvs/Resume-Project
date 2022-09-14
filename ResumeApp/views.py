from django.shortcuts import render
from .models import *

data = {}
# Create your views here.
def login_page(request):
    data['current_page'] = "login_page"
    return render(request,"login_page.html",data)

def signup_page(request):
    data['current_page'] = "signup_page"
    return render(request,"signup_page.html",data)

def profile_page(request):
    data['current_page'] = "profile_page"
    return render(request,"profile_page.html",data)

def register(request):
    master = Master.objects.create(
        Email = request.POST['email'],
        Password = request.POST['password'],
    )

    Profile.objects.create(
        Master = master
    )
