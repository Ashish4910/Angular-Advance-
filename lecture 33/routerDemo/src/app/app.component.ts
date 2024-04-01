import { Component, DoCheck, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'routerDemo';


  constructor(private router: Router) {

  }
  login: any = false;

  ngOnInit() {

    this.login = localStorage.getItem('isloggedIn');
    if (this.login != true) {
      this.router.navigate(['login']);
    }
  }

  ngDoCheck() {
    this.login = localStorage.getItem('isloggedIn');
  }

  logout() {
    this.login = localStorage.setItem('isloggedIn', 'false');
    window.location.reload();
  }
}
