import { Component} from '@angular/core';

@Component({
  selector: 'app-stringinterpolationbinding',
  templateUrl: './stringinterpolationbinding.component.html',
  styleUrls: ['./stringinterpolationbinding.component.css']
})
export class StringinterpolationbindingComponent {

  propertyToBind: string = 'Hi there!';
  numberToBind: number = 32;

}
