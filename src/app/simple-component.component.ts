import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-simple-component',
  template: `
    <div>
      <input type="text" #input/>
      <button (click)="onLog(input.value)">Log</button>
    </div>
  `,
  providers: [LogService]
})
export class SimpleComponentComponent {
  constructor(private logService: LogService) { }
  onLog(message: string) {
    this.logService.write(message);
  }
}
