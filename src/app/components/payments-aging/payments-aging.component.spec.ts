import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsAgingComponent } from './payments-aging.component';

describe('PaymentsAgingComponent', () => {
  let component: PaymentsAgingComponent;
  let fixture: ComponentFixture<PaymentsAgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsAgingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsAgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
