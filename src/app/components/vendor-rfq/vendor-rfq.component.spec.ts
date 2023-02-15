import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRfqComponent } from './vendor-rfq.component';

describe('VendorRfqComponent', () => {
  let component: VendorRfqComponent;
  let fixture: ComponentFixture<VendorRfqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorRfqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorRfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
