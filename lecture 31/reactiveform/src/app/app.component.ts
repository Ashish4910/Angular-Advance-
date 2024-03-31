import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactiveform';

  getDetails(deatils: any) {
    console.log(deatils); // this will show all the value in console
    console.log(deatils.value);  // this tell that form value 
    console.log(deatils.status); // this will tell that form submited is value or not 

  }

}
