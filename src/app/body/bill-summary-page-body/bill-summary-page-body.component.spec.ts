import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSummaryPageBodyComponent } from './bill-summary-page-body.component';

describe('BillSummaryPageBodyComponent', () => {
  let component: BillSummaryPageBodyComponent;
  let fixture: ComponentFixture<BillSummaryPageBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillSummaryPageBodyComponent]
    });
    fixture = TestBed.createComponent(BillSummaryPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
