import { Component, OnInit } from '@angular/core';
import { GreetService } from '../greet.service';

@Component({
  selector: 'app-democomponent',
  templateUrl: './democomponent.component.html',
  styleUrls: ['./democomponent.component.css'],

})
export class DemocomponentComponent {

  msg: any;


  constructor(private greet: GreetService) {

  }

  greetmsg() {
    this.msg = this.greet.display();
  }

}
