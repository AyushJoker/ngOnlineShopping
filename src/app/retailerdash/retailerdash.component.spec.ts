import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerdashComponent } from './retailerdash.component';

describe('RetailerdashComponent', () => {
  let component: RetailerdashComponent;
  let fixture: ComponentFixture<RetailerdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
