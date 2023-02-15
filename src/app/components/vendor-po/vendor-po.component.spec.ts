import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPoComponent } from './vendor-po.component';

describe('VendorPoComponent', () => {
  let component: VendorPoComponent;
  let fixture: ComponentFixture<VendorPoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
