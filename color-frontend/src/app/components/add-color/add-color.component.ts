import { Component } from '@angular/core';
import { PaletteService } from '../../services/palette.service';
import { Color } from '../../models/palette.models';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent {
  newColor: Color = { hex_code: '', hue: 0, saturation: 0, lightness: 0 };

  constructor(private paletteService: PaletteService) { }

  addColor(): void {
    this.paletteService.createColor(this.newColor).subscribe(result => {
      console.log('Color added:', result);
      this.newColor = { hex_code: '', hue: 0, saturation: 0, lightness: 0 }; 
    });
  }
}
