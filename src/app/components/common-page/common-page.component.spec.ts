import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPageComponent } from './common-page.component';

describe('CommonPageComponent', () => {
  let component: CommonPageComponent;
  let fixture: ComponentFixture<CommonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
