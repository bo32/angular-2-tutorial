import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [HttpService]
})
export class HttpComponent implements OnInit {
  asyncString = this.httpService.getData();
  errorMessage: String;
  items: any[] = [];
  constructor(private httpService: HttpService) { }
  ngOnInit() {
    this.httpService.getData().subscribe(
      (data: any) => console.log(data)
    );
  }
  onSubmit(username, email) {
    this.httpService.sendData({username: username, email: email})
      .subscribe(
        data => console.log(data)
      );
  }
  onGetAllData() {
    this.httpService.getAllData().subscribe(
      data => {
        const tmp = [];
        for (let key in data) 
          tmp.push(data[key]);
        this.items = tmp;
      },
      error => this.errorMessage = error.error
    );
  }
}
