from django.contrib import admin
from .models import *
# Register your models here.


all_models = [Certification,CourseStream,CourseType,Education,Experience,HobbiesInterest,
Master,Profile,ProjectPortfolio,Reference,Skill,SocialLink,SocialProfile,UniversityBoard,]

for i in all_models:
    admin.site.register(i)
