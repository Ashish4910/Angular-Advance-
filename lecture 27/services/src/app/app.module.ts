import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemocomponentComponent } from './democomponent/democomponent.component';
import { GreetService } from './greet.service';

@NgModule({
  declarations: [
    AppComponent,
    DemocomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, DemocomponentComponent]
})
export class AppModule { }
