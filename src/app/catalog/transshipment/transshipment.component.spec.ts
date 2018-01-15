import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransshipmentComponent } from './transshipment.component';

describe('TransshipmentComponent', () => {
  let component: TransshipmentComponent;
  let fixture: ComponentFixture<TransshipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransshipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransshipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
