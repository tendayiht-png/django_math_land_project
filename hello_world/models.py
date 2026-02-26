from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator
from django.urls import reverse

# Create your models here.
# Create model for speaker with name, bio, email, and photo fields 
class Speaker(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()
    email = models.EmailField()

    photo = models.ImageField(upload_to='speakers/')

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('speaker_detail', args=[str(self.id)])
# Create model for talk with title, description, speaker, and duration fields
class Talk(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    speaker = models.ForeignKey(Speaker, on_delete=models.PROTECT)
    duration = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(180)])

# Add a code field with a pattern of three uppercase letters followed by three digits (e.g., ABC123)
    code = models.CharField(max_length=6, validators=[RegexValidator(regex=r'^[A-Z]{3}\d{3}$', message='Code must be in the format ABC123')], unique=True)                      

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('talk_detail', args=[str(self.id)])  