import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCreditComponent } from './vendor-credit.component';

describe('VendorCreditComponent', () => {
  let component: VendorCreditComponent;
  let fixture: ComponentFixture<VendorCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
