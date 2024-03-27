import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'evenOddPipe';

price= 0;
setPrice(val:any){

  this.price= val;

}

}
