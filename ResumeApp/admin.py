from django.contrib import admin

# Register your models here.
from .models import *

admin.site.site_header = admin.site.site_title = "Making Resume"

all_models = [
    Certification, CourseStream,
    CourseType, Education,
    Experience, HobbiesInterest,
    Master, Profile,
    ProjectPortfolio, Reference,
    Skill, SocialLink,
    SocialProfile, UniversityBoard]

for model in all_models:
    admin.site.register(model)