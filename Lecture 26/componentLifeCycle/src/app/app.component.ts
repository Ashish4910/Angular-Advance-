import { Component, OnInit } from "@angular/core";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'componentLifeCycle';


  show = true;
  setInputMsg: any;
  ngOnInit() {

    console.log("----OnInit is called ----------");
  }

  display() {
    this.show = !this.show;
  }


  setMessage(val: any) {
    this.setInputMsg = val;
  }

}
