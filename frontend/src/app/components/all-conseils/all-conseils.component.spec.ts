import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllConseilsComponent } from './all-conseils.component';

describe('AllConseilsComponent', () => {
  let component: AllConseilsComponent;
  let fixture: ComponentFixture<AllConseilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllConseilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllConseilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
