import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class AuthService {

  private authenticated:boolean = false;

  constructor() {
  }

  public isAuthenticated():Promise<boolean> {
    return Promise.resolve(this.authenticated);
  }

  public isNotAuthenticated():Promise<boolean> {
    return Promise.resolve(!this.authenticated);
  }

  public authenticate(user:User):void {
    this.authenticated = (user.email === "toto@toto.com" && user.password === "toto");
  }
}
