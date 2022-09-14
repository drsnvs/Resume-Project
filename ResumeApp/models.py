from django.db import models

class UniversityBoard(models.Model):
    UniversityBoardName = models.CharField(max_length=100)

    class Meta:
        db_table = 'UniversityBoard'

    def __str__(self) -> str:
        return self.UniversityBoardName

class CourseType(models.Model):
    Type = models.CharField(max_length=20)

    class Meta:
        db_table = 'coursetype'

    def __str__(self) -> str:
        return self.Type

duration_choices = (
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
)
class CourseStream(models.Model):
    CourseType = models.ForeignKey(CourseType, on_delete=models.CASCADE)
    CourseName = models.CharField(max_length=20)
    Duration = models.IntegerField(choices=duration_choices)

    class Meta:
        db_table = 'coursestream'

    def __str__(self) -> str:
        return self.CourseName.upper()


class Master(models.Model):
    Email = models.EmailField(unique=True)
    Password = models.CharField(max_length=12)
    IsActive = models.BooleanField(default=False)
    DateCreated = models.DateTimeField(auto_now_add=True)
    DateUpdated = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'master'

    def __str__(self) -> str:
        return self.Email

gender_choices = (
    ('m', 'male'),
    ('f', 'female'),
)

class SocialLink(models.Model):
    Name = models.CharField(max_length=15)
    URL = models.URLField(unique=True)

    class Meta:
        db_table = 'sociallink'

    def __str__(self) -> str:
        return self.Name


class Profile(models.Model):
    Master = models.ForeignKey(Master, on_delete=models.CASCADE)
    ProfileImage = models.FileField(upload_to="profiles/", default='avatar.png')
    FullName = models.CharField(max_length=25, default='', blank=True)
    Mobile = models.CharField(max_length=10, default='', blank=True)
    Gender = models.CharField(max_length=5, choices=gender_choices, default='', blank=True)
    Country = models.CharField(max_length=30, default='', blank=True)
    State = models.CharField(max_length=30, default='', blank=True)
    City = models.CharField(max_length=30, default='', blank=True)
    Address = models.TextField(max_length=255, default='', blank=True)

    class Meta:
        db_table = 'profile'

    def __str__(self) -> str:
        return self.FullName if self.FullName else 'No Name'

class SocialProfile(models.Model):
    Profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    SocialLink = models.ForeignKey(SocialLink, on_delete=models.CASCADE)
    UserID = models.CharField(max_length=20)

    class Meta:
        db_table = 'socialprofile'

class Education(models.Model):
    Profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    UniversityBoard = models.ForeignKey(UniversityBoard, on_delete=models.CASCADE)
    CourseStream = models.ForeignKey(CourseStream, on_delete=models.CASCADE)
    StartDate = models.DateField()
    EndDate = models.DateField()
    IsContinue = models.BooleanField(default=False)
    Score = models.DecimalField(decimal_places=2, max_digits=3)
    IsCGPA = models.BooleanField(default=False)

    class Meta:
        db_table = 'education'

skill_level_choices = (
    (35, 'beginner'),
    (70, 'intermediate'),
    (100, 'advance'),
)

class Skill(models.Model):
    Profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    Skill = models.CharField(max_length=25)
    Level = models.CharField(max_length=10, choices=skill_level_choices)

    class Meta:
        db_table = 'skill'

class Experience(models.Model):
    Profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    CompanyName = models.CharField(max_length=100)
    Designation = models.CharField(max_length=50)
    StartDate = models.DateField()
    EndDate = models.DateField()
    IsContinue = models.BooleanField(default=False)

    class Meta:
        db_table = 'experience'

class ProjectPortfolio(models.Model):
    Profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    ProjectImage = models.FileField(upload_to="projects/", default='project.png')
    ProjectName = models.CharField(max_length=30)
    Description = models.TextField(max_length=255)
    ProjectDate = models.DateField()
    IsContinue = models.BooleanField(default=False)
    ProjectURL = models.URLField(default='')

    class Meta:
        db_table = 'projectportfolio'

class Certification(models.Model):
    Profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    Name = models.CharField(max_length=25)
    Year = models.CharField(max_length=4)
    Issuer = models.CharField(max_length=25)
    VerificationURL = models.URLField(default='')

    class Meta:
        db_table = 'certification'

class Reference(models.Model):
    Profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    PersonName = models.CharField(max_length=25)
    JobProfile = models.CharField(max_length=25)
    Contact = models.EmailField()
    LinkedIn = models.URLField()

    class Meta:
        db_table = 'reference'

class HobbiesInterest(models.Model):
    Profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    Name = models.CharField(max_length=15)

    class Meta:
        db_table = 'hobbiesinterest'