import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactiveForm2';

  myreactiveform: FormGroup;

  constructor() {

    this.myreactiveform = new FormGroup({});

  }

  ngOnInit() {

    this.myreactiveform = new FormGroup({

      'usr': new FormControl(null, Validators.required),
      'pwd': new FormControl(null),
      'cont': new FormControl(null),
      'email': new FormControl('Enter Validate Email', [Validators.maxLength(10), Validators.email])
    });
  }

  submitData() {


    console.log(this.myreactiveform);
  }


}
