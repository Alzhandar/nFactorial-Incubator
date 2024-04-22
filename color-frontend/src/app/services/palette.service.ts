import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Color, Palette } from '../models/palette.models';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {
  private apiUrl = 'http://localhost:8000/api';  
  private colors = new BehaviorSubject<Color[]>([]);

  constructor(private http: HttpClient) { }

  getColors(): Observable<Color[]> {
    return this.http.get<Color[]>(`${this.apiUrl}/colors/`)
      .pipe(
        map(colors => {
          this.colors.next(colors);
          return colors;
        })
      );
  }

  getPalettes(): Observable<Palette[]> {
    return this.http.get<Palette[]>(`${this.apiUrl}/palettes/`);
  }

  createColor(color: Color): Observable<Color> {
    return this.http.post<Color>(`${this.apiUrl}/colors/`, color);
  }

  updateColor(color: Color): Observable<Color> {
    return this.http.put<Color>(`${this.apiUrl}/colors/${color.id}/`, color);
  }

  deleteColor(colorId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/colors/${colorId}/`);
  }

  createPalette(palette: Palette): Observable<Palette> {
    return this.http.post<Palette>(`${this.apiUrl}/palettes/`, palette);
  }

  updatePalette(palette: Palette): Observable<Palette> {
    return this.http.put<Palette>(`${this.apiUrl}/palettes/${palette.id}/`, palette);
  }

  deletePalette(paletteId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/palettes/${paletteId}/`);
  }

  searchColors(hexValue: string): Observable<Color[]> {
    return this.colors.asObservable().pipe(
      map(colors => colors.filter(color => color.hex_code.toLowerCase().includes(hexValue.toLowerCase())))
    );
  }
}
