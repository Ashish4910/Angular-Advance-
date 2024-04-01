import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  credential(detail: any) {
    console.log(detail.value.usr);
    if (detail.value.usr == 'admin' && detail.value.pwd == '1234') {
      localStorage.setItem('isloggedIn', 'true');
      this.router.navigate(['inbox']);

    } else {
      localStorage.setItem('isloggedIn', 'false');
      alert('Login Failed');
    }

  }

}
