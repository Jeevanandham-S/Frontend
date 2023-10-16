import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageBodyComponent } from './user-page-body.component';

describe('UserPageBodyComponent', () => {
  let component: UserPageBodyComponent;
  let fixture: ComponentFixture<UserPageBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPageBodyComponent]
    });
    fixture = TestBed.createComponent(UserPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
