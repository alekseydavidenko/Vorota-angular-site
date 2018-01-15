import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedRollComponent } from './speed-roll.component';

describe('SpeedRollComponent', () => {
  let component: SpeedRollComponent;
  let fixture: ComponentFixture<SpeedRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
