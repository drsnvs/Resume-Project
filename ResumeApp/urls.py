from django.urls import path
from .views import *

urlpatterns = [
    path("",login_page,name=''),
    path("signup_page/",signup_page,name='signup_page'),
    path("profile_page/",profile_page,name='profile_page'),
    path("register/",register,name='register'),
    path("login/",login,name='login'),
    path("forget_password_page/",forget_password_page,name='forget_password_page'),
    path("logout/",logout,name='logout'),
    path("profile_update/",profile_update,name='profile_update'),
    path("otp_page/",verify_otp,name='otp_page'),
]