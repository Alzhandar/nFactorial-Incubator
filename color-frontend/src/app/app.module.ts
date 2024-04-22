import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { PaletteEditorComponent } from './components/palette-editor/palette-editor.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; 
import { AddColorComponent } from './components/add-color/add-color.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    PaletteEditorComponent,
    AddColorComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
