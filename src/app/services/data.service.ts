import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  loggedInUser: string;

  constructor(private http: HttpClient) { }

  login(): void {
    //this.http.get
  }
}
