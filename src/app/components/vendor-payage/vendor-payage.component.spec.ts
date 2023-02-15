import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPayageComponent } from './vendor-payage.component';

describe('VendorPayageComponent', () => {
  let component: VendorPayageComponent;
  let fixture: ComponentFixture<VendorPayageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPayageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorPayageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
