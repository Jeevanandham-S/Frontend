import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsiterPageBodyComponent } from './regsiter-page-body.component';

describe('RegsiterPageBodyComponent', () => {
  let component: RegsiterPageBodyComponent;
  let fixture: ComponentFixture<RegsiterPageBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegsiterPageBodyComponent]
    });
    fixture = TestBed.createComponent(RegsiterPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
