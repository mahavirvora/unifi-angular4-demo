import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
  apiRoot: string = "";

  constructor(private http: Http) { }

  doPOST(req) {
    console.log("POST");
    let url = `${this.apiRoot}/contact/add`;
    return this.http.post(url, req);
  }
}
