from django.db import models

class Color(models.Model):
    hex_code = models.CharField(max_length=7)  
    hue = models.IntegerField()  
    saturation = models.IntegerField()  
    lightness = models.IntegerField()  

    def adjust_hue(self, amount):
        self.hue = (self.hue + amount) % 360
        self.save()

    def adjust_saturation(self, amount):
        self.saturation = max(0, min(100, self.saturation + amount))
        self.save()

    def adjust_lightness(self, amount):
        self.lightness = max(0, min(100, self.lightness + amount))
        self.save()

    def __str__(self):
        return self.hex_code
    
class Palette(models.Model):
    name = models.CharField(max_length=100)  
    colors = models.ManyToManyField(Color)  

    def export_to_json(self):
        from .serializers import PaletteSerializer
        return PaletteSerializer(self).data

    def share_palette(self, user):
        pass
    
    def __str__(self):
        return self.name