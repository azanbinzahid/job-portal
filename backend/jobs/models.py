from django.db import models

class Job(models.Model):
    def __str__(self):
        return self.title
    title = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    category = models.CharField(max_length=100)
    qualification = models.CharField(max_length=100)
    experiance = models.IntegerField(default=1)
    salaray = models.IntegerField(default=100)
    datestamp = models.DateTimeField(auto_now_add=True)