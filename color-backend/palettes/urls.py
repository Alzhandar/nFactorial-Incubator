from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ColorViewSet, PaletteViewSet

router = DefaultRouter()
router.register(r'colors', ColorViewSet)
router.register(r'palettes', PaletteViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
