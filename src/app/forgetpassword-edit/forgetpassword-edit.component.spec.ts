import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordEditComponent } from './forgetpassword-edit.component';

describe('ForgetpasswordEditComponent', () => {
  let component: ForgetpasswordEditComponent;
  let fixture: ComponentFixture<ForgetpasswordEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetpasswordEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetpasswordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
