import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passDataOutput';

  op: any;


  getOutputData(val: any) {
    this.op = val;
  }

}
