export interface Color {
    id?: number;
    hex_code: string;
    hue: number;
    saturation: number;
    lightness: number;
  }
  
  export interface Palette {
    id?: number;
    name: string;
    colors: Color[];
  }
  