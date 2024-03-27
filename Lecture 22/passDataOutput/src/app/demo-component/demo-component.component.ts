import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent {

@Input()
inputData:any;



  @Output()
  passOutput = new EventEmitter();



  getData(val: any) {
    this.passOutput.emit(val);
  }

}
