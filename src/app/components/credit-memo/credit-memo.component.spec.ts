import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMemoComponent } from './credit-memo.component';

describe('CreditMemoComponent', () => {
  let component: CreditMemoComponent;
  let fixture: ComponentFixture<CreditMemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditMemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
