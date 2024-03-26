import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  res: string = '';

  login(username: any, password: any) {

    if (username.value == 'admin' && password.value == '123') {
      this.res = "Welcome to anular";
    } else {
      this.res = "Login Failed Invalid Credentials";
    }

  }

}
