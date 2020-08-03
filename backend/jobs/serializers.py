from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from .models import Job

class JobSerializer(serializers.ModelSerializer):

    location = serializers.StringRelatedField(many=True)
    category = serializers.StringRelatedField(many=True)
    qualification = serializers.StringRelatedField(many=True)
    applicants = serializers.StringRelatedField(many=True)
    company = serializers.StringRelatedField()
    class Meta:
        model = Job
        fields = ('__all__')
        
