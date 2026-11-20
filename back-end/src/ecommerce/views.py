from rest_framework.viewsets import ModelViewSet
from .models import Guide
from .serializers import GuideSerializer

class GuideViewSet (ModelViewSet):
  queryset = Guide.objects.all()
  serializer_class = GuideSerializer

