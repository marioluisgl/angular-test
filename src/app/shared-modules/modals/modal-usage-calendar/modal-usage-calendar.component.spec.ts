import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsageCalendarComponent } from './modal-usage-calendar.component';

describe('ModalUsageCalendarComponent', () => {
  let component: ModalUsageCalendarComponent;
  let fixture: ComponentFixture<ModalUsageCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUsageCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUsageCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
