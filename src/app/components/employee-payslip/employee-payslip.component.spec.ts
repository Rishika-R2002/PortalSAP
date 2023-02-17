import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayslipComponent } from './employee-payslip.component';

describe('EmployeePayslipComponent', () => {
  let component: EmployeePayslipComponent;
  let fixture: ComponentFixture<EmployeePayslipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePayslipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
