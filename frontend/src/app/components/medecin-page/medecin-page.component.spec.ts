import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinPageComponent } from './medecin-page.component';

describe('MedecinPageComponent', () => {
  let component: MedecinPageComponent;
  let fixture: ComponentFixture<MedecinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedecinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
