import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockTimerChronoComponent } from './clock-timer-chrono.component';

describe('ClockTimerChronoComponent', () => {
  let component: ClockTimerChronoComponent;
  let fixture: ComponentFixture<ClockTimerChronoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockTimerChronoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockTimerChronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
