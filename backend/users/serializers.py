from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from jobs.serializers import JobSerializer 
from jobs.models import Job 


class UserSerializer(serializers.ModelSerializer):

    jobsApplied = JobSerializer(source="user_to_job",many=True, read_only =True)
    firstName = serializers.CharField(source='first_name')
    lastName = serializers.CharField(source='last_name')
    class Meta:
        model = User
        fields = ('username','firstName','lastName', 'email', 'jobsApplied',)


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
