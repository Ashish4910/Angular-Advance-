import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'httpclient';

  user: any;

  constructor(private userService: UserServiceService) { }


  ngOnInit(){
    this.userService.displayUser().subscribe(data => this.user = data);

  }
  displayUser() {
    this.userService.displayUser().subscribe(data => this.user = data);
  }
}
