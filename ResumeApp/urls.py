from django.urls import path
from .views import *

urlpatterns = [
    path("",login_page,name=''),
    path("signup_page/",signup_page,name='signup_page'),
    path("profile_page/",profile_page,name='profile_page'),
    path("register/",register,name='register'),
    path("login/",login,name='login'),
    path('verify_otp/<str:verify_for>/', verify_otp, name='verify_otp'),
    path("forget_password_page/",forget_password_page,name='forget_password_page'),
    path("logout/",logout,name='logout'),
    path("profile_update/",profile_update,name='profile_update'),
    path("otp_page/",otp_page,name='otp_page'),
    path("add_education/",add_education,name='add_education'),
    path("edit_education/<int:pk>/",edit_education,name='edit_education'),
    path("delete_education/<int:pk>/",delete_education,name='delete_education'),
    path("add_experience/",add_experience,name='add_experience'),
    path("edit_experience/<int:pk>/",edit_experience,name='edit_experience'),
    path("delete_experience/<int:pk>/",delete_experience,name='delete_experience'),
]