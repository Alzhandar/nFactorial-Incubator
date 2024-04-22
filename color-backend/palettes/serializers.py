from rest_framework import serializers
from .models import Color, Palette

class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['id', 'hex_code', 'hue', 'saturation', 'lightness']

class PaletteSerializer(serializers.ModelSerializer):
    colors = ColorSerializer(many=True, read_only=True)

    class Meta:
        model = Palette
        fields = ['id', 'name', 'colors']
