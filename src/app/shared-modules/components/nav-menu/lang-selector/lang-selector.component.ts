import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { GlOBAL_CONFIG } from 'src/app/core/configs/global.config';
import { HandleSharedService } from 'src/app/services/handle-services.service';

@UntilDestroy()
@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LangSelectorComponent implements OnInit, OnDestroy {
  public toSelect: boolean;
  public languagesDynamic: string[];
  public showLangMenu: boolean;
  public selected: string;
  private languages: string[];

  constructor(private translate: TranslateService,
              private sharedStoreService: HandleSharedService) { }

  ngOnInit(): void {
    this.languages = GlOBAL_CONFIG.LANGUAGES;
    this.sharedStoreService.currentLanguage$.subscribe((lang: string) => {
      const value = lang || this.translate.currentLang;
      this.toSelect = false;
      this.selected = value;
      this.translate.use(value);
      this.showLangMenu = true;
      this.languagesDynamic = [];
      this._organizeLanguages(this.selected);
    });
  }


  private _organizeLanguages(selected: string): void {
    this.languagesDynamic = this.languages.filter(value => value !== selected);
  }

  // tslint:disable-next-line: max-line-length
  public getStyle(count: number): { top: string, 'margin-top': string, 'animation-delay': string, '-webkit-animation-delay': string, padding: number } {
    const style = {
      top: '',
      padding: 0,
      'margin-top': '',
      'animation-delay': '',
      '-webkit-animation-delay': '',
    };
    style['top'] = 25 * (count + 1) + 'px';
    style['margin-top'] = -26 * (count + 1) + 'px';
    style['animation-delay'] = 0.1 + count / 9 + 's';
    style['-webkit-animation-delay'] = 0.1 + count / 9 + 's';
    return style;
  }

  public selectLanguage(value: string): void {
    this.sharedStoreService.changeCurrentLanguageSource(value);
  }


  public displayLanguages(): void {
    this.toSelect = true;
  }


  ngOnDestroy(): void {
  }
}
