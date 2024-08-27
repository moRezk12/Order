import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalabatBackComponent } from './talabat-back.component';

describe('TalabatBackComponent', () => {
  let component: TalabatBackComponent;
  let fixture: ComponentFixture<TalabatBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalabatBackComponent]
    });
    fixture = TestBed.createComponent(TalabatBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
