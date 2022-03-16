import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Person } from './person';

@Injectable()
export class DataloadService {
  constructor(private http: HttpClient) {}

  baseURL: string = 'http://160.119.142.236:52773/csp/development/save';
  addPerson(person: Person): Observable<any> {
    let username = 'vijay';
    let password = 'test123!';
    let user = username + ':' + password;

    const headers = {
      'content-type': 'application/json',
      ' Authorization': 'Basic ',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization X-Requested-With',
    };

    const body = JSON.stringify(person);
    console.log(body);
    return this.http.post(this.baseURL + body, {
      headers: headers,
    });
  }
}
