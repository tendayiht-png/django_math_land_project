from django.contrib import admin
# import in models  
from .models import Speaker, Talk   
# Register your models here.
# Register the Speaker model with the admin site  
admin.site.register(Speaker)
# Register the Talk model with the admin site
admin.site.register(Talk)
