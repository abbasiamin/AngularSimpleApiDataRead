import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataReaderService {

  url='https://jsonplaceholder.typicode.com/todos/1';
  
  constructor(private http:HttpClient) { }

  read(){
    return this.http.get(this.url);
  }

}
