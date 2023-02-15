import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDebitComponent } from './vendor-debit.component';

describe('VendorDebitComponent', () => {
  let component: VendorDebitComponent;
  let fixture: ComponentFixture<VendorDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorDebitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
