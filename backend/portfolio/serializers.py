from rest_framework import serializers
from .models import User, Experience, Project, Stake, Education, SocialNetwork, Location

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    company_logo = serializers.SerializerMethodField()

    class Meta:
        model = Experience
        fields = '__all__'

    def get_company_logo(self, obj):
        if obj.company_logo:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.company_logo.url) if request else obj.company_logo.url
        return None

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class StakeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stake
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class SocialNetworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialNetwork
        fields = '__all__'

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'
