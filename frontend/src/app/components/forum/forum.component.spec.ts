import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumComponent } from './forum.component';

describe('ForumComponent', () => {
  let component: ForumComponent;
  let fixture: ComponentFixture<ForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search with a given string', () => {
    component.search = "Bébé malade ?";
    component.onSearch();
    expect(component.filteredData.length).toBe(1);
    expect(component.filteredData[0].question).toBe("Bébé malade ?");
  });

  
  it('should return all result with an empty string', () => {
    component.search = "";
    component.onSearch();
    expect(component.filteredData.length).toBe(component.data.length);
  });
});
