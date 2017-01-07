import { Component } from '@angular/core';
//import { CustompropertybindingComponent } from './custompropertybinding.component';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  onClicked(value: string) {
    alert(value + " Mwahaha");
  }
}
