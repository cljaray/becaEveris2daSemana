import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoReportesComponent } from './contenido-reportes.component';

describe('ContenidoReportesComponent', () => {
  let component: ContenidoReportesComponent;
  let fixture: ComponentFixture<ContenidoReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoReportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
