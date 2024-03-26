import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-democomponent',
  templateUrl: './democomponent.component.html',
  styleUrls: ['./democomponent.component.css']
})
export class DemocomponentComponent {

  @Input()
  msg: any;


  display() {
    this.msg = "gfddsgf";
  }
}
