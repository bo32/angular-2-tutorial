import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
  @Output() customClicked = new EventEmitter<string>();
  onClicked() {
    this.customClicked.emit("It works!");
  }
}
