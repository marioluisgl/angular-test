import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsageWizardComponent } from './modal-usage-wizard.component';

describe('ModalUsageWizardComponent', () => {
  let component: ModalUsageWizardComponent;
  let fixture: ComponentFixture<ModalUsageWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUsageWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUsageWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
