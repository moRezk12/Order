import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMoreComponent } from './section-more.component';

describe('SectionMoreComponent', () => {
  let component: SectionMoreComponent;
  let fixture: ComponentFixture<SectionMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionMoreComponent]
    });
    fixture = TestBed.createComponent(SectionMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
