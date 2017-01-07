import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custompropertybinding',
  templateUrl: './custompropertybinding.component.html',
  styleUrls: ['./custompropertybinding.component.css']
})
export class CustompropertybindingComponent {
  @Input() result: Number = 0;
}
