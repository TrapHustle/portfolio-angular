from django.contrib import admin
from .models import User, Experience, Project, Stake, Education, SocialNetwork, Location

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'title', 'is_available']

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['position', 'company', 'start_date', 'is_current']

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'url']

@admin.register(Stake)
class StakeAdmin(admin.ModelAdmin):
    list_display = ['name', 'description', 'icon']

@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ['degree', 'school', 'start_date']

@admin.register(SocialNetwork)
class SocialNetworkAdmin(admin.ModelAdmin):
    list_display = ['name', 'url']

@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ['city', 'country']
