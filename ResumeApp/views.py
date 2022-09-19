from django.shortcuts import render,redirect
from .models import *
from django.db.utils import IntegrityError

data= {
    'gender_choices':list(),
    'university_boards':UniversityBoard.objects.all(),
}

for gc in gender_choices:
    data['gender_choices'].append({'short_text':gc[0],'text':gc[1]})



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
    load_profile_data(request)
    # load_education_data(request)
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

# profile update view
def profile_update(request):
    master = Master.objects.get(
        Email = request.session['email'],
    )

    profile = Profile.objects.get(Master=master)
    profile.FullName = request.POST['full_name']
    profile.Mobile = request.POST['mobile']
    profile.BirthDate = request.POST['birth_date']
    profile.Gender = request.POST['gender']
    profile.Country = request.POST['country']
    profile.State = request.POST['state']
    profile.City =  request.POST['city']
    profile.Address = request.POST['address']

    profile.save()
    return redirect(profile_page)



# Unversity board add education
def add_education(request):
    master = Master.objects.get(
        Email = request.session['email'],
    )
    profile = Profile.objects.get(Master=master)

    uni_board = UniversityBoard.objects.get(id=int(request.POST["university_board"]))
    Education.objects.get(
        Profile=profile,
        UniversityBoard=uni_board,
    )

    return redirect(profile_page)
# Load Education Data
def load_education_data(request):
    master = Master.objects.get(
        Email = request.session['email'],
    )
    
    profile = Profile.objects.get(Master = master)
    education = Education.objects.get(Master = master)

    data['education_data'] = education



# Add Course Stream
def add_course_stream(request):
    master = Master.objects.get(
        Email = request.session['email'],
    )
    profile = Profile.objects.get(Master=master)
    education = Education.objects.get(Master = master)
    coursestream = CourseStream.objects.get(id=int(request.POST["course_stream"]))
    CourseStream.objects.get(
        Profile=profile,
        Education = education,
        CourseStream = coursestream,
    )
    return redirect(profile_page)
# load course stream
def load_course_stream(request):
    master = Master.objects.get(
        Email = request.session['email']
    )
    profile = Profile.objects.get(Master = master)
    education = Education.objects.get(Master = master)
    coursestream = CourseStream.objects.get(Master=master)
    data['course_stream'] = coursestream


def add_course_type(request):
    master = Master.objects.get(
        Email = request.session['email'],
    )
    profile = Profile.objects.get(Master=master)
    education = Education.objects.get(Master = master)
    coursestream = CourseStream.objects.get(Master = master)
    coursetype = CourseType.objects.get(id=int(request.POST["course_type"]))
    CourseType.objects.get(
        Profile=profile,
        Education = education,
        CourseType = coursetype,
        CourseStream = coursestream,
    )
    return redirect(profile_page)
# load course stream
def load_course_type(request):
    master = Master.objects.get(
        Email = request.session['email']
    )
    profile = Profile.objects.get(Master = master)
    education = Education.objects.get(Master = master)
    coursetype = CourseType.objects.get(Master = master)
    coursestream = CourseStream.objects.get(Master = master)
    data['course_type'] = coursetype



def logout(request):
    if 'email' in request.session:
        del request.session['email']

    return redirect(login_page)