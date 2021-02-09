import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(){
  }

  gotoSignUp(){
    this.router.navigate(['sign-up'])
  }
  onSubmit(){
    this.router.navigate(['home'])
  }

  // gotoLogin(){
  //   this.router.navigate(['sign-up'])
  // }

 

}
