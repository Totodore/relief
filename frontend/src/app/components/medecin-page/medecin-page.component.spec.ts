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

  
  it('should search with a given string', () => {
    component.search = "Docteur Jean";
    component.onSearch();
    expect(component.filteredData.length).toBe(1);
    expect(component.filteredData[0].nom).toBe("Docteur Jean");
  });

  it('should return all result with an empty string', () => {
    component.search = "";
    component.onSearch();
    expect(component.filteredData.length).toBe(component.data.length);
  });
});
