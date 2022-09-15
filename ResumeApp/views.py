from django.shortcuts import render,redirect
from .models import *
from django.db.utils import IntegrityError
data= {}
# Create your views here.
def login_page(request):
    data['current_page']='login_page'
    return render(request,"login_page.html",data)

def signup_page(request):
    data['current_page']='signup_page'
    return render(request,"signup_page.html",data)

def profile_page(request):
    if 'email' not in request.session:
        return redirect(login_page)
    data['current_page']='profile_page'
    return render(request,"profile_page.html",data)

def forget_password_page(request):
    data['current_page']='forget_password_page'
    return render(request,"forget_password_page.html",data)

# load profile data
def load_profile_data(request):
    master = Master.objects.get(
        Email = request.session['email'],
    )
    
    profile = Profile.objects.get(Master = master)

    data['profile_data'] = profile


# Regiter View
def register(request):
    try: 
        master = Master.objects.create(
            Email = request.POST['email'],
            Password = request.POST['password'],
        )
        Profile.objects.create(
            Master = master,
        )
    except IntegrityError as err:
        print("err")
        print("Email Already Exists")
    return redirect(login_page)

def login(request):
    try:
        master = Master.objects.get(
            Email = request.POST['email'],
        )
        if master.Password == request.POST['password']:
            request.session['email']=request.POST['email']
            load_profile_data(request)
            return redirect(profile_page)
        else :
            print("Incorrect Password")
    except Master.DoesNotExist as err:
        print(err)

    return redirect(login_page)


def logout(request):
    if 'email' in request.session:
        del request.session['email']

    return redirect(login_page)