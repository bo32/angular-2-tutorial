import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {  
  user = {
    username: 'default',
    email: 'default@test.com',
    password: 'default',
    role: 'guest'
  }
  roles = ['guest', 'user', 'developer', 'admin'];
  onSubmit(userForm: NgForm) {
    console.log(userForm);
    console.log(this.user);
  }
}
