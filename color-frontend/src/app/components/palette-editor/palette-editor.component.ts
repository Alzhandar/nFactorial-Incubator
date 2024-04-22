import { Component, OnInit } from '@angular/core';
import { PaletteService } from '../../services/palette.service';
import { Palette } from '../../models/palette.models';

@Component({
  selector: 'app-palette-editor',
  templateUrl: './palette-editor.component.html',
  styleUrls: ['./palette-editor.component.css']
})
export class PaletteEditorComponent implements OnInit {
  palettes: Palette[] = [];

  constructor(private paletteService: PaletteService) { }

  ngOnInit() {
    this.paletteService.getPalettes().subscribe(palettes => {
      this.palettes = palettes;
    });
  }
}
