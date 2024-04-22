from .models import Color

def generate_complementary_color(color):
    new_hue = (color.hue + 180) % 360
    return Color(hue=new_hue, saturation=color.saturation, lightness=color.lightness)

def generate_analogous_colors(color):
    return [
        Color(hue=(color.hue + 30) % 360, saturation=color.saturation, lightness=color.lightness),
        Color(hue=(color.hue - 30) % 360, saturation=color.saturation, lightness=color.lightness)
    ]
