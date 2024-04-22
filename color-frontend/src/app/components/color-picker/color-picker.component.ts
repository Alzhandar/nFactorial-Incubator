import { Component, OnInit } from '@angular/core';
import { PaletteService } from '../../services/palette.service';
import { Color } from '../../models/palette.models';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  colors: Color[] = [];

  constructor(private paletteService: PaletteService) { }

  ngOnInit() {
    this.paletteService.getColors().subscribe(colors => {
      this.colors = colors;
    });
  }

  selectColor(color: Color) {
    console.log('Color selected:', color);
  }
}
