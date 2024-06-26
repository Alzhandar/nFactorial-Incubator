import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteEditorComponent } from './palette-editor.component';

describe('PaletteEditorComponent', () => {
  let component: PaletteEditorComponent;
  let fixture: ComponentFixture<PaletteEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaletteEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaletteEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
