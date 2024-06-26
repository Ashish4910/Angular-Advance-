import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }

  displayUser(){
   return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
