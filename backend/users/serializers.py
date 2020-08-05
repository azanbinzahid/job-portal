from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from jobs.serializers import JobSerializer 
from jobs.models import Job 
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    birthDate = serializers.DateField(source='birth_date')

    class Meta:
        model = Profile
        fields = ("location", "bio", "birthDate", "education")

class UserSerializer(serializers.ModelSerializer):

    jobsApplied = JobSerializer(source="user_to_job",many=True, read_only =True)
    firstName = serializers.CharField(source='first_name')
    lastName = serializers.CharField(source='last_name')
    profile=ProfileSerializer()
    class Meta:
        model = User
        fields = ('username','firstName','lastName', 'email', 'jobsApplied', 'profile')

    def update(self, instance, validated_data):
        super()
        profile_data = validated_data.pop('profile')
        profile = instance.profile
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.save()

        profile.location = profile_data.get('location', profile.location)
        profile.bio = profile_data.get('bio', profile.bio)
        profile.education = profile_data.get('education', profile.education)
        profile.birth_date = profile_data.get('birthDate', profile.birth_date)
        profile.save()
        return instance


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    firstName = serializers.CharField(source='first_name')
    lastName = serializers.CharField(source='last_name')


    class Meta:
        model = User
        fields = ('token', 'username', 'password', 'firstName','lastName', 'email')
