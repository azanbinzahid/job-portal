from django.contrib import admin
from .models import Job, Qualification, Company, Location, Category

# Register your models here.
admin.site.register(Job)
admin.site.register(Qualification)
admin.site.register(Company)
admin.site.register(Location)
admin.site.register(Category)
