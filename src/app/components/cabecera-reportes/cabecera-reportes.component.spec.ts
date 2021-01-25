import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraReportesComponent } from './cabecera-reportes.component';

describe('CabeceraReportesComponent', () => {
  let component: CabeceraReportesComponent;
  let fixture: ComponentFixture<CabeceraReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraReportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
