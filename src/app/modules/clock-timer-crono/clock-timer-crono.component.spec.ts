import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockTimerCronoComponent } from './clock-timer-crono.component';

describe('ClockTimerCronoComponent', () => {
  let component: ClockTimerCronoComponent;
  let fixture: ComponentFixture<ClockTimerCronoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockTimerCronoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockTimerCronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
