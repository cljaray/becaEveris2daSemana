import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCarpetasComponent } from './contenido-carpetas.component';

describe('ContenidoCarpetasComponent', () => {
  let component: ContenidoCarpetasComponent;
  let fixture: ComponentFixture<ContenidoCarpetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoCarpetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoCarpetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
