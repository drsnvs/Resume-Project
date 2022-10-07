from datetime import datetime
from email import message
from django.shortcuts import render,redirect
from .models import *
from django.db.utils import IntegrityError
from django.core.mail import send_mail
from random import randint
from django.conf import settings

data= {
    'gender_choices':list(),
    'university_boards':UniversityBoard.objects.all(),
    'course_streams':CourseStream.objects.all(),
    'course_types':CourseType.objects.all(),
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

def otp_page(request):
    data['current_page']='otp_page'
    return render(request,"otp_page.html",data)

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
    # try: 
        # master = Master.objects.create(
        #     Email = request.POST['email'],
        #     Password = request.POST['password'],
        # )
        # Profile.objects.create(
        #     Master = master,
        # )
    request.session['reg_data'] = {
        'email' : request.POST['email'],
        'password' : request.POST['password'],
    }

    send_otp(request)

    return redirect(otp_page)
    # except IntegrityError as err:
    #     print("err")
    #     print("Email Already Exists")
    # return redirect(login_page)

def login(request):
    try:
        master = Master.objects.get(
            Email = request.POST['email'],
        )
        if master.IsActive:
            if master.Password == request.POST['password']:
                request.session['email']=request.POST['email']
                # load_profile_data(request)
                return redirect(profile_page)
            else :
                print("Incorrect Password")
        else:
            print("Sorry,Your account is deactivated.Active First")
            request.session['reg_data'] = {
                'email': request.POST['email'],
                'password': request.POST['password'],
            }

            send_otp(request, otp_for="activate")

            return redirect(otp_page)

    except Master.DoesNotExist as err:
        print(err)

    # return redirect(login_page)
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
# def add_education(request):
#     master = Master.objects.get(
#         Email = request.session['email'],
#     )
#     profile = Profile.objects.get(Master=master)
#     uni_board = UniversityBoard.objects.get(id=int(request.POST["university_board"]))
#     cou_stream = CourseStream.objects.get(id=int(request.POST["course_stream"]))
#     cou_type = CourseType.objects.get(id=int(request.POST["course_type"]))

#     Education.objects.get(
#         Profile=profile,
#         UniversityBoard=uni_board,
#         CourseStream=cou_stream,
#         CourseType=cou_type,
#     )

#     return redirect(profile_page)

# Add Education
def add_education(request):
    print(request.POST)
    master = Master.objects.get(
        Email = request.session['email'],
    )

    profile = Profile.objects.get(Master = master)

    uni_board = UniversityBoard.objects.get(id=int(request.POST['university_board']))
    crs_stream = CourseStream.objects.get(id=int(request.POST['course_stream']))

    Education.objects.create(
        Profile = profile,
        UniversityBoard = uni_board,
        CourseStream = crs_stream,
        StartDate = request.POST['start_date'],
        EndDate = datetime.now() if 'is_continue' in request.POST else request.POST['end_date'],
        IsContinue = True if 'is_continue' in request.POST else False,
        Score = int(request.POST['score']),
        IsCGPA = True if 'is_cgpa' in request.POST else False,
    )

    return redirect(profile_page)
# Load Education Data
def load_education_data(request):
    master = Master.objects.get(
        Email = request.session['email'],
    )
    
    profile = Profile.objects.get(Master = master)
    education = Education.objects.get(Master = master)
    coursestream = CourseStream.objects.get(Master = master)
    CourseType = CourseType.objects.get(Master = master)
    data['education_data'] = education



# Add Course Stream
# def add_course_stream(request):
#     master = Master.objects.get(
#         Email = request.session['email'],
#     )
#     profile = Profile.objects.get(Master=master)
#     education = Education.objects.get(Master = master)
#     coursestream = CourseStream.objects.get(id=int(request.POST["course_stream"]))
#     CourseStream.objects.get(
#         Profile=profile,
#         Education = education,
#         CourseStream = coursestream,
#     )
#     return redirect(profile_page)
# load course stream
# def load_course_stream(request):
#     master = Master.objects.get(
#         Email = request.session['email']
#     )
#     profile = Profile.objects.get(Master = master)
#     education = Education.objects.get(Master = master)
#     coursestream = CourseStream.objects.get(Master=master)
#     data['course_stream'] = coursestream


# def add_course_type(request):
#     master = Master.objects.get(
#         Email = request.session['email'],
#     )
#     profile = Profile.objects.get(Master=master)
#     education = Education.objects.get(Master = master)
#     coursestream = CourseStream.objects.get(Master = master)
#     coursetype = CourseType.objects.get(id=int(request.POST["course_type"]))
#     CourseType.objects.get(
#         Profile=profile,
#         Education = education,
#         CourseType = coursetype,
#         CourseStream = coursestream,
#     )
#     return redirect(profile_page)
# load course stream
# def load_course_type(request):
#     master = Master.objects.get(
#         Email = request.session['email']
#     )
#     profile = Profile.objects.get(Master = master)
#     education = Education.objects.get(Master = master)
#     coursetype = CourseType.objects.get(Master = master)
#     coursestream = CourseStream.objects.get(Master = master)
#     data['course_type'] = coursetype



def logout(request):
    if 'email' in request.session:
        del request.session['email']

    return redirect(login_page)

# OTP Create
def otp(request):
    otp_number = randint(1000,9999)
    print("Otp is: ",otp_number)
    request.session['otp'] = otp_number 

# Send Otp
def send_otp(request,otp_for="register"):
    print("otp for:",otp_for)
    otp(request)

    email_to_list = [request.session['reg_data']['email'],]

    if otp_for == 'activate':
        request.session['otp_for'] = 'activate'
        subject = f'OTP for Resume Account Activation'

    elif otp_for == 'recover_pwd':
        request.session['otp_for'] = 'recover_pwd'
        subject = f'OTP for Resume Password Recovery'

    else:
        request.session['otp_for'] = 'register'
        subject = f'OTP for Resume Registration'

    email_from = settings.EMAIL_HOST_USER

    message = f"Your One Time Password for verification is: {request.session['otp']}"

    send_mail(subject, message, email_from, email_to_list)

    alert('success', 'An OTP has sent to your email.')

# Verify OTP

def verify_otp(request, verify_for="register"):
    if request.session['otp'] == int(request.POST['otp']):
        if verify_for == 'activate':
            master = Master.objects.get(Email=request.session['reg_data']['email'])
            master.Password = request.session['reg_data']['password']
            master.IsActive = True
            master.save()

            return redirect(profile_page)

        elif verify_for == 'recover_pwd':
            master = Master.objects.get(Email=request.session['email'])
            master.password = request.session['password']
            master.save()

        else:
            print('before new account')
            master = Master.objects.create(
                Email = request.session['reg_data']['email'],
                Password = request.session['reg_data']['password'],
                IsActive = True,
            )
            Profile.objects.create(
                Master = master,
            )
            print('after new account')
        print("Verified")
        alert('success','An OTP verified.')

    else:
        print("Invalid Otp")
        alert('danger','Invalid OTP')

        return redirect(otp_page)
    del request.session['reg_data']
    return redirect(login_page)

# alert System
def alert(type,text):
    data['alert'] = {
        'type':type,
        'tetx':text
    }
    print('alert called.')