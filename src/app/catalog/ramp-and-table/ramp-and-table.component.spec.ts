import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RampAndTableComponent } from './ramp-and-table.component';

describe('RampAndTableComponent', () => {
  let component: RampAndTableComponent;
  let fixture: ComponentFixture<RampAndTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RampAndTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RampAndTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
