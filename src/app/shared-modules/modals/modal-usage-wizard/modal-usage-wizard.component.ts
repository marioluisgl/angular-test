import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { IUserModel, UserModel } from '../../../models/user.model';
import {cloneDeep} from 'lodash-es';
import { HandleAuthService, HandleSharedService } from 'src/app/services/handle-services.service';
import { SKILLS_SHOWED } from '../../../core/configs/global.config';


@UntilDestroy()
@Component({
  selector: 'app-modal-usage-wizard',
  templateUrl: './modal-usage-wizard.component.html',
  styleUrls: ['./modal-usage-wizard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalUsageWizardComponent implements OnInit, OnDestroy {
  public agreementText: { en: string, es: string };
  public userData: {user: IUserModel};
  public userModel: IUserModel;
  public langUse: string;
  public check = false;
  public form1: FormGroup;
  public form2: FormGroup;
  public form3: FormGroup;
  public form4: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalUsageWizardComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private translate: TranslateService,
              private handleAuth: HandleAuthService,
              private handleShared: HandleSharedService,
              private router: Router,
              private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private fb: FormBuilder) {
    this.userModel = new UserModel();
  }


  ngOnInit(): void {
    this._initForms();
    this.handleShared.currentLanguage$.pipe(untilDestroyed(this)).subscribe(data => {
      this.langUse = data;
      this.agreementText = SKILLS_SHOWED;
    });
  }

  public saveData(): void {
    this.userModel.name = this.form1.get('name').value;
    this.userModel.last_name = this.form1.get('last_name').value;
    this.userModel.email = this.form2.get('email').value;
    this.userModel.password = this.form2.get('password').value;
    this.userModel.birth_date = this.form3.get('birth_date').value;
    this.userModel.is_logged = true;

    const modelDataCopy = cloneDeep(this.userModel);

    this.handleAuth.auth_user(modelDataCopy);
    this.router.navigate(['/home']);
    this.onClose(modelDataCopy);

  }

  public onClose(data?: any): void {
    this.dialogRef.close(data);
  }

  ngOnDestroy(): void {
  }

  public onChange(e): void {
    this.check = e.checked;
    this.cdr.detectChanges();
  }

  public onNext($event: string): void {
  }

  public onPrevious($event: string): void {
  }

  private _initForms(): void {
    this._createForm1();
    this._createForm2();
    this._createForm3();
    this._createForm4();
  }

  public _createForm1(): void {
    this.form1 = this.fb.group({
      name: [null, Validators.required],
      last_name: [null, [Validators.required, Validators.minLength(3)]],
    });
  }

  public _createForm2(): void {
    this.form2 = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(3)]],
    });
  }

  public _createForm3(): void {
    this.form3 = this.fb.group({
      birth_date: [null, []],
    });
  }

  public _createForm4(): void {
    this.form4 = this.fb.group({
      agreement: [null, [Validators.required]],
    });
  }
}
