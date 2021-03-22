import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {WizardStepComponent} from './wizard-step.component';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WizardComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  @ViewChild('initialPosition', {static: true}) initialPosition;
  @Input() nextText: string;
  @Input() previousText: string;
  @Input() headerClass: string;
  @Input() currentStep: number;
  @Output() Next = new EventEmitter<string>();
  @Output() Previous = new EventEmitter<string>();
  public steps: WizardStepComponent[];
  public bars: WizardStepComponent[];
  public loading: boolean;
  public finished: boolean;
  public wizardLoading: boolean;
  @ContentChildren(WizardStepComponent) private contentsChildStep: QueryList<WizardStepComponent>;

  constructor() {
  }

  ngOnInit(): void {
    this.nextText = this.nextText ?? 'Next';
    this.previousText = this.previousText ?? 'Previous';
    this.currentStep = this.currentStep ?? 1;
    this.loading = false;
    this.finished = false;
  }

  ngAfterContentInit(): void {
    this.buildSteps(true);
  }

  ngAfterViewInit(): void {
    this.contentsChildStep.changes.pipe(untilDestroyed(this)).subscribe(() => {
      this.buildSteps();
    });
  }


  public goNext(validate = true, emitActionInNext = true): void {
    const valid = this.canGoNext();
    if (valid) {
      this.loading = true;

      const stepObj = this.steps[this.currentStep - 1];
      if (emitActionInNext && stepObj.hasOwnProperty('actionInNext')) {
        stepObj.actionInNext.emit();
      }
      this.Next.emit(this.currentStep.toString());
      this.steps[this.currentStep - 1].completed = true;

      if (!validate || stepObj.moveInNext) {
        if (this.currentStep < this.steps.length) {
          this._goTo(this.currentStep + 1);
          this._scrollToTop();
        } else {
          this.finished = true;
        }
      }
    } else if (this.steps[this.currentStep - 1].execNextIfInvalid && !this.finished) {
      this.Next.emit('ERROR');
    }
    this.loading = false;
  }

  public goPrevious(): void {
    const stepObj = this.steps[this.currentStep - 1];
    if (this.currentStep === 1) {
      return;
    }
    const valid = this.canGoPrevious();
    if (valid || stepObj.execPreviousIfInvalid) {
      if (stepObj.hasOwnProperty('actionInPrevious')) {
        stepObj.actionInPrevious.emit();
      }
      this.loading = true;
      this.Previous.emit(this.currentStep.toString());
      if (valid) {
        this._goTo(this.currentStep - 1);
      }
      this._scrollToTop();
      this.loading = false;
    }
  }

  public canGoNext(): boolean {
    const stepTemp = this.steps[this.currentStep - 1];
    if (undefined === stepTemp || null == stepTemp) {
      return false;
    }

    if (stepTemp && (undefined === stepTemp.nextIf || null === stepTemp.nextIf)) {
      return this.currentStep <= this.steps.length && !this.loading;
    }

    return this.currentStep <= this.steps.length && stepTemp.nextIf && !this.loading;
  }

  public canGoPrevious(): boolean {
    const stepTemp = this.steps[this.currentStep - 1];
    if (!stepTemp) {
      return false;
    }
    if (stepTemp && !stepTemp.previousIf) {
      return !this.loading;
    }
    return stepTemp.previousIf && !this.loading;
  }

  ngOnDestroy(): void {
  }

  public buildSteps(firstTime?: boolean): void {
    this.steps = this.contentsChildStep.toArray();
    this.bars = this.contentsChildStep.toArray();
    this.bars.pop();
    if (firstTime) {
      this.contentsChildStep.first.showValue = true;
      this.wizardLoading = true;
    }
  }

  private _viewComponent(setNum: number): void {
    this.contentsChildStep.forEach((element, index) => {
      element.showValue = index + 1 === setNum;
    });
  }

  private _goTo(stepNum: number): void {
    const stepScope = this.steps[stepNum - 1];
    this.finished = false;

    if (this._canGoTo(stepNum)) {
      this.currentStep = stepNum;
      stepScope.completed = false;
      this._viewComponent(stepNum);

    } else {
      if (stepScope && stepScope.requireSteps instanceof Array) {
        for (let i = 0; i < stepScope.requireSteps.length; i++) {
          if (!this.steps[i].completed) {
            this.currentStep = stepScope.requireSteps[i];
            this._viewComponent(this.currentStep);
            break;
          }
        }
      }
      alert('Debe completar el paso #' + this.currentStep);
    }
  }

  private _scrollToTop(): void {
    if (undefined !== this.initialPosition) {
      this.initialPosition.nativeElement.scrollIntoView();
    }
  }

  private _canGoTo(stepNum: number): boolean {
    if (0 < stepNum && stepNum <= this.steps.length) {
      const stepScope = this.steps[stepNum - 1];
      if (stepScope.requireSteps instanceof Array) {

        for (let i = 0; i < stepScope.requireSteps.length; i++) {
          if (!this.steps[i].completed) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }
}
