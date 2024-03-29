import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-democomponent',
  templateUrl: './democomponent.component.html',
  styleUrls: ['./democomponent.component.css']
})
export class DemocomponentComponent implements OnDestroy, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {



  @Input()
  msg: any;

  ngOnDestroy() {
    console.log("----OnDestroy is called---");
  }


  ngOnChanges(simple: SimpleChanges) {

    console.log(simple)
  }

  ngDoCheck() {

    console.log("---------Docheck ----------");
  }


  ngAfterContentInit() {
    console.log(" ------ ngAfterContentInit--------");
  }
  ngAfterContentChecked(): void {
    console.log(" ------ ngAfterContentChecked--------");
  }

  ngAfterViewInit(): void {
    console.log(" ------ ngAfterViewInit--------");
  }
  ngAfterViewChecked(): void {
    console.log(" ------ ngAfterViewChecked--------");
  }


}
