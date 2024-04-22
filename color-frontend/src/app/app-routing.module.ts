import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { PaletteEditorComponent } from './components/palette-editor/palette-editor.component';
import { AddColorComponent } from './components/add-color/add-color.component';

const routes: Routes = [
  { path: 'color-picker', component: ColorPickerComponent },
  { path: 'palette-editor', component: PaletteEditorComponent },
  { path: 'add-color', component: AddColorComponent },
  { path: '', redirectTo: '/color-picker', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
