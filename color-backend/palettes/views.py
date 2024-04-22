from rest_framework import viewsets
from .models import Color, Palette
from .serializers import ColorSerializer, PaletteSerializer

class ColorViewSet(viewsets.ModelViewSet):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer

    def perform_update(self, serializer):
        instance = serializer.save()
        if 'hue' in serializer.validated_data:
            instance.adjust_hue(serializer.validated_data['hue'])
        if 'saturation' in serializer.validated_data:
            instance.adjust_saturation(serializer.validated_data['saturation'])
        if 'lightness' in serializer.validated_data:
            instance.adjust_lightness(serializer.validated_data['lightness'])

class PaletteViewSet(viewsets.ModelViewSet):
    queryset = Palette.objects.all()
    serializer_class = PaletteSerializer
