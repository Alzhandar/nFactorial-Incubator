from django.contrib import admin
from .models import Color, Palette

class ColorAdmin(admin.ModelAdmin):
    list_display = ('hex_code', 'hue', 'saturation', 'lightness')  
    search_fields = ('hex_code',)  
    list_filter = ('hue', 'saturation', 'lightness')  

class PaletteAdmin(admin.ModelAdmin):
    list_display = ('name', 'display_colors') 
    search_fields = ('name',)
    filter_horizontal = ('colors',)  

    def display_colors(self, obj):
        return ", ".join([color.hex_code for color in obj.colors.all()])
    display_colors.short_description = 'Colors'  

admin.site.register(Color, ColorAdmin)
admin.site.register(Palette, PaletteAdmin)
