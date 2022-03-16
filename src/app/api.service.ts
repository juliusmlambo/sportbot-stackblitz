import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './Person';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
  baseURL: string = 'http://160.119.142.236:52773/csp/development/save';
  constructor(private http: HttpClient) {}

  addPerson(person: Person): Observable<any> {
    let username = 'vijay';
    let password = 'test123!';
    let user = username + ':' + password;

    const headers = {
      'content-type': 'application/json',
      Authorization: 'Basic ',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization X-Requested-With',
    };
    const body = JSON.stringify(person);
    console.log(body);
    return this.http.post(this.baseURL + btoa(user) + body, {
      headers: headers,
    });
  }
}
