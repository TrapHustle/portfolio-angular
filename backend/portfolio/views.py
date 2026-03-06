from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from .models import User, Experience, Project, Stake, Education, SocialNetwork, Location
from .serializers import *

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_serializer_context(self):
        return {'request': self.request}

class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

    def get_serializer_context(self):
        return {'request': self.request}

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_serializer_context(self):
        return {'request': self.request}

class StakeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Stake.objects.all()
    serializer_class = StakeSerializer

class EducationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class SocialNetworkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SocialNetwork.objects.all()
    serializer_class = SocialNetworkSerializer

class LocationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

@api_view(['POST'])
@csrf_exempt
def contact(request):
    full_name = request.data.get('full_name')
    email = request.data.get('email')
    phone = request.data.get('phone', '')
    message = request.data.get('message')

    if not full_name or not email or not message:
        return Response(
            {'error': 'Champs obligatoires manquants.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        send_mail(
            subject=f'Portfolio Contact — {full_name}',
            message=f'''
Nouveau message depuis le portfolio :

Nom : {full_name}
Email : {email}
Téléphone : {phone}

Message :
{message}
            ''',
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.CONTACT_EMAIL],
            fail_silently=False,
        )
        return Response(
            {'success': 'Message envoyé avec succès.'},
            status=status.HTTP_200_OK
        )
    except Exception as e:
        return Response(
            {'error': f'Erreur envoi email: {str(e)}'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
