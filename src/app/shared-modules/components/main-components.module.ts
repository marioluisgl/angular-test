import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialsModule} from '../materials.module';
import {TranslateModule} from '@ngx-translate/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LangSelectorComponent } from './nav-menu/lang-selector/lang-selector.component';
import { SideNavMenuComponent } from './nav-menu/side-nav-menu/side-nav-menu.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard/wizard-step.component';
import { ModalUsageCalendarComponent } from '../modals/modal-usage-calendar/modal-usage-calendar.component';
import { ModalUsageCounterComponent } from '../modals/modal-usage-counter/modal-usage-counter.component';
import { ModalUsageWizardComponent } from '../modals/modal-usage-wizard/modal-usage-wizard.component';
import { TimerComponent } from './timer/timer.component';
import { ClockTimerChronoComponent } from './clock-timer-chrono/clock-timer-chrono.component';
import {PipesModule} from '../../shared-modules/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialsModule,
        TranslateModule.forChild(),
        PipesModule
    ],
    declarations: [
        NavMenuComponent,
        LangSelectorComponent,
        SideNavMenuComponent,
        WizardComponent,
        WizardStepComponent,
        ModalUsageCalendarComponent,
        ModalUsageCounterComponent,
        ModalUsageWizardComponent,
        TimerComponent,
        ClockTimerChronoComponent,
    ],
    exports: [
        NavMenuComponent,
        LangSelectorComponent,
        SideNavMenuComponent,
        WizardComponent,
        WizardStepComponent,
        TimerComponent,
        ClockTimerChronoComponent,
    ]
})
export class MainComponentsModule {
}
