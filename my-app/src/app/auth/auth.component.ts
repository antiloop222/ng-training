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

  public email:string;
  public password:string;

  private authService:AuthService;
  private router:Router;

  constructor(p_service:AuthService, p_router:Router) {
    this.authService = p_service;
    this.router = p_router;
  }

  public clickHandler():void {
    this.authService.authenticate(new User(this.email, this.password));
    this.authService.isAuthenticated().then(
      (authenticated:boolean) => {
        if(authenticated) {
          this.router.navigate(["payment"]);
        } else {
          alert("bad login/password");
        }
      }
    );
  }

  ngOnInit() {
  }

}
