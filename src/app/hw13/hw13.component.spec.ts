import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HW13Component } from './hw13.component';

describe('HW13Component', () => {
  let component: HW13Component;
  let fixture: ComponentFixture<HW13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HW13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HW13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
