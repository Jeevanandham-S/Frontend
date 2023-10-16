import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPageHeaderComponent } from './payment-page-header.component';

describe('PaymentPageHeaderComponent', () => {
  let component: PaymentPageHeaderComponent;
  let fixture: ComponentFixture<PaymentPageHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentPageHeaderComponent]
    });
    fixture = TestBed.createComponent(PaymentPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
