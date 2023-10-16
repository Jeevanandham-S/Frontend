import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPageBodyComponent } from './payment-page-body.component';

describe('PaymentPageBodyComponent', () => {
  let component: PaymentPageBodyComponent;
  let fixture: ComponentFixture<PaymentPageBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentPageBodyComponent]
    });
    fixture = TestBed.createComponent(PaymentPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
