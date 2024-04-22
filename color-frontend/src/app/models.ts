export interface Color {
    id: number;
    hex_value: string;
    hue: number;
    saturation: number;
    lightness: number;
  }
  
  export interface Palette {
    id: number;
    name: string;
    colors: Color[];
  }
  
  export interface ColorSettings {
    hue: number;
    saturation: number;
    lightness: number;
  }
  