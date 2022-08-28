import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerEditComponent } from './retailer-edit.component';

describe('RetailerEditComponent', () => {
  let component: RetailerEditComponent;
  let fixture: ComponentFixture<RetailerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
