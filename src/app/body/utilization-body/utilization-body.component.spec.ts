import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizationBodyComponent } from './utilization-body.component';

describe('UtilizationBodyComponent', () => {
  let component: UtilizationBodyComponent;
  let fixture: ComponentFixture<UtilizationBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilizationBodyComponent]
    });
    fixture = TestBed.createComponent(UtilizationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
