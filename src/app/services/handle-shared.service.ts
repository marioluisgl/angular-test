import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


export class HandleSharedService {

  private currentLanguageSource: BehaviorSubject<string>;
  public currentLanguage$: Observable<string>;

    constructor() {
    const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
    this.currentLanguageSource = new BehaviorSubject<string>(lang);
    this.currentLanguage$ = this.currentLanguageSource.asObservable();
  }

  public changeCurrentLanguageSource(value: string): void{
    this.currentLanguageSource.next(value);
    localStorage.setItem('lang', value);
  }

  public getCurrentLanguageSource(): any {
    return this.currentLanguageSource.getValue();
  }
}
