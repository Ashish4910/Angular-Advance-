import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formModule';

  value: any;

  displayInput(){
    this.value='updated Value';

  }
}
