import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HttpService {
  constructor(private http: Http) { }
  getData() {
    return this.http.get('https://angular2-test-e90ef.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const myHeaders = new Headers(); // optional
    myHeaders.append('Content-Tyep', 'application/json');
    return this.http.post('https://angular2-test-e90ef.firebaseio.com/data.json', body, {
      headers: myHeaders
    }).map((data: Response) => data.json());
  }
  getAllData() {
    return this.http.get('https://angular2-test-sse90ef.firebaseio.com/data.json')
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }
  private errorHandler(error: any) {
    if(error.status == "404") console.log('Error 404');
    else console.log(error);
    return Observable.throw(error.json());
  }
}
