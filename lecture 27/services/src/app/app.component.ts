import { Component } from '@angular/core';
import { GreetService } from './greet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'services';

  msg: any;
  constructor(private greet: GreetService) { }

  ngOnInit() {
    this.msg = this.greet.display();
  }

}
