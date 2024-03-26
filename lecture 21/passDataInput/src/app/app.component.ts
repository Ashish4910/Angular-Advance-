import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passDataInput';

  result: any;
  pushDisplay(temp: any) {
    this.result = temp.value;

  }
}
