import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageBodyComponent } from './login-page-body.component';

describe('LoginPageBodyComponent', () => {
  let component: LoginPageBodyComponent;
  let fixture: ComponentFixture<LoginPageBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageBodyComponent]
    });
    fixture = TestBed.createComponent(LoginPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
