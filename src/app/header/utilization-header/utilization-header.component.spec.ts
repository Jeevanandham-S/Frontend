import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizationHeaderComponent } from './utilization-header.component';

describe('UtilizationHeaderComponent', () => {
  let component: UtilizationHeaderComponent;
  let fixture: ComponentFixture<UtilizationHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilizationHeaderComponent]
    });
    fixture = TestBed.createComponent(UtilizationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
