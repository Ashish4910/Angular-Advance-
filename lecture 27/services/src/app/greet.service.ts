import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class GreetService {

  display() {
    return "Hello I'm Service";
  }
}
