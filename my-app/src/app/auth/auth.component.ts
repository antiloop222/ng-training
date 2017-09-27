import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public login:string;
  public password:string;

  private authService:AuthService;
  private router:Router;

  constructor(p_service:AuthService, p_router:Router) {
    this.authService = p_service;
    this.router = p_router;
  }

  public clickHandler(p_obj:any):void {
    this.authService.authenticate(new User(this.login, this.password));
    this.router.navigate(["home"]);
  }

  ngOnInit() {
  }

}
