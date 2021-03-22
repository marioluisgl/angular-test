import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserModel } from '../models/user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HandleAuthService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  public auth_user(data: IUserModel): void {
    console.log(data.is_logged);
    if (data.is_logged) {
    this.store_auth_data(data);
    } else {
    this._clearDataStorage();
    }
  }

  public logout_user(): void {
    this._clearDataStorage();
    this.router.navigate(['/home']);
  }

  public store_auth_data(data): IUserModel {
    const userData = data;
    this.save_user_in_local_storage(userData);
    return {
      ...userData,
    };
  }

  public save_user_in_local_storage(data: IUserModel): void{
    localStorage.setItem('userData', JSON.stringify(data));
  }

  public get get_user_data_from_storage(): string {
    return localStorage.getItem('userData');
  }

  public get dataLogged(): { user: IUserModel } {
    const userData = JSON.parse(this.get_user_data_from_storage);
    return {user: userData};
  }

  public get isLoggedIn(): boolean {
    const userData = this.get_user_data_from_storage;
    if ( userData ){
      return true;
    }
    return false;
  }

  private _clearDataStorage(): void {
    localStorage.removeItem('userData');
  }


}
