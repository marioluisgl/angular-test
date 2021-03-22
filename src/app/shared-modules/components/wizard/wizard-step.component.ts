import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-wizard-step',
  template: `
    <div *ngIf="show">
      <ng-content></ng-content>
    </div>`
})
export class WizardStepComponent implements OnInit, OnDestroy {
  @Input() nextText: string;
  @Input() previousText: string;
  @Input() requireSteps: number[];
  @Input() nextIf: boolean;
  @Input() previousIf: boolean;
  @Input() execPreviousIfInvalid: boolean;
  @Input() execNextIfInvalid: boolean;
  @Input() completed: boolean;
  @Input() moveInNext = true;
  @Output() actionInPrevious = new EventEmitter<string>();
  @Output() actionInNext = new EventEmitter<string>();
  public show = false;
  public finished: boolean;

  constructor() {
  }

  public set showValue(value: boolean) {
    this.show = value;
  }

  ngOnInit(): void {
  }

  public isActive(value: boolean): void {
    this.show = value;
  }

  ngOnDestroy(): void {
  }
}
