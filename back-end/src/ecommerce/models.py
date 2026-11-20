from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Producto (models.Model):
  nombre = models.CharField(max_length=100)
  descripcion = models.TextField()
  precio = models.DecimalField(max_digits=10, decimal_places=2)


class PerfilUsuario (models.Model):
  usuario = models.OneToOneField(User, on_delete=models.CASCADE)
  direccion = models.CharField(max_length=200)
  telefono = models.CharField(max_length=15)

class Guide (models.Model):
  trackingNumber = models.CharField(max_length = 15, unique = True)
  createdAt = models.DateTimeField(default = timezone.now)
  updatedAt = models.DateTimeField (auto_now = True)
  currentStatus = models.CharField(max_length = 20, default="Pending", choices=[("Pending", "Pending"), ("In Transit", "In Transit"), ("Delivered", "Delivered")])