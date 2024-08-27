import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousFavoriteProductsComponent } from './previous-favorite-products.component';

describe('PreviousFavoriteProductsComponent', () => {
  let component: PreviousFavoriteProductsComponent;
  let fixture: ComponentFixture<PreviousFavoriteProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousFavoriteProductsComponent]
    });
    fixture = TestBed.createComponent(PreviousFavoriteProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
