import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lecture_20';

  res: number | undefined ;

  add(no1: number, no2: number) {

    this.res = Number(no1)+Number(no2);

  }

  sub(no1: number, no2: number) {

    this.res = no1-no2;

  }
}
