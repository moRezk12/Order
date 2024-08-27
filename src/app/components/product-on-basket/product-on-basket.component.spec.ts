import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOnBasketComponent } from './product-on-basket.component';

describe('ProductOnBasketComponent', () => {
  let component: ProductOnBasketComponent;
  let fixture: ComponentFixture<ProductOnBasketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductOnBasketComponent]
    });
    fixture = TestBed.createComponent(ProductOnBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
