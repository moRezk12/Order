import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountcodesComponent } from './discountcodes.component';

describe('DiscountcodesComponent', () => {
  let component: DiscountcodesComponent;
  let fixture: ComponentFixture<DiscountcodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountcodesComponent]
    });
    fixture = TestBed.createComponent(DiscountcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
