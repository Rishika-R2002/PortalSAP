import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorGrComponent } from './vendor-gr.component';

describe('VendorGrComponent', () => {
  let component: VendorGrComponent;
  let fixture: ComponentFixture<VendorGrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorGrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorGrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
