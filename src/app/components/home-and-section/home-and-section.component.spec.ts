import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAndSectionComponent } from './home-and-section.component';

describe('HomeAndSectionComponent', () => {
  let component: HomeAndSectionComponent;
  let fixture: ComponentFixture<HomeAndSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAndSectionComponent]
    });
    fixture = TestBed.createComponent(HomeAndSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
