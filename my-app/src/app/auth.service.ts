import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class AuthService {

  private authenticated:boolean;

  constructor() {
    this.authenticated = false;
   }

  public isAuthenticated():Promise<boolean> {
    console.log("isAuthenticated:" + this.authenticated);
    return Promise.resolve(this.authenticated);
  }

  public isNotAuthenticated():Promise<boolean> {
    console.log("isNotAuthenticated:" + (!this.authenticated));
    return Promise.resolve(!this.authenticated);
  }

  public authenticate(user:User):void {
    this.authenticated = (user.login === "toto" && user.password === "toto");
    console.log("authenticate:" + this.authenticated);
  }

}
