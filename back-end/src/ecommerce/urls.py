from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GuideViewSet

router = DefaultRouter()
router.register("monitoring", GuideViewSet, basename="guides")


urlpatterns = [
  path("", include(router.urls))
]