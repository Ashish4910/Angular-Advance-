import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive';


  age: number = 0;

  total =['Ashish', 'Manish','Komal','Rajkumari','Sheshmani'];

  isEligble(val:any){

    this.age = val;
  }

}
