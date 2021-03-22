import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsageCounterComponent } from './modal-usage-counter.component';

describe('ModalUsageCounterComponent', () => {
  let component: ModalUsageCounterComponent;
  let fixture: ComponentFixture<ModalUsageCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUsageCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUsageCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
