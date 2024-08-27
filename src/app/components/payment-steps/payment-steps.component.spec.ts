import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStepsComponent } from './payment-steps.component';

describe('PaymentStepsComponent', () => {
  let component: PaymentStepsComponent;
  let fixture: ComponentFixture<PaymentStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentStepsComponent]
    });
    fixture = TestBed.createComponent(PaymentStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
