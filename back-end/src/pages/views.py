
from rest_framework.viewsets import ModelViewSet

from .models import Song, User, Order
from .serializers import SongSerializer, UserSerializer, OrderSerializer


class SongViewSet (ModelViewSet):
  queryset = Song.objects.all()
  serializer_class = SongSerializer

class UserCreateViewSet (ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class OrderViewSet (ModelViewSet):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer