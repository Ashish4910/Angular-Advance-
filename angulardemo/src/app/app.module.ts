import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './democomponent';
import { MyComponent } from './my/my.component';

@NgModule({
  declarations: [
    AppComponent,DemoComponent, MyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,DemoComponent,MyComponent]
})
export class AppModule { }
