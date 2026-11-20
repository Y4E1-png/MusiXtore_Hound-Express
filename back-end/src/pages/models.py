from django.db import models
from django.utils import timezone



class User (models.Model):
  name = models.CharField(max_length = 50)
  email = models.CharField(max_length = 50)
  password = models.CharField(max_length = 20)
  createAt = models.DateTimeField(default = timezone.now)
  updateAt = models.DateTimeField(auto_now = True)


class Song (models.Model):
  title = models.CharField(max_length=50)
  album = models.CharField(max_length=25)
  price = models.DecimalField(max_digits=10, decimal_places=2)
  artist = models.CharField(max_length=50)
  image = models.URLField(blank=True)


class Order(models.Model):
  products = models.ManyToManyField(Song, related_name="orders")
  total = models.DecimalField(max_digits=10, decimal_places=2)
  created_at = models.DateTimeField(auto_now_add=True)