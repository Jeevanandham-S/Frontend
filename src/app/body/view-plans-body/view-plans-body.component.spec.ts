import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlansBodyComponent } from './view-plans-body.component';

describe('ViewPlansBodyComponent', () => {
  let component: ViewPlansBodyComponent;
  let fixture: ComponentFixture<ViewPlansBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPlansBodyComponent]
    });
    fixture = TestBed.createComponent(ViewPlansBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
