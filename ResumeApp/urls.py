from django.urls import path

from .views import *


urlpatterns = [
    path("",login_page),
    path("signup_page/",signup_page,name="signup_page"),
    path("profile_page/",profile_page,name="profile_page"),
    path("register/",register,name="register"),
]