import { Component, 
    OnInit, // 2
    OnChanges, // 1
    DoCheck, // 3
    AfterContentInit, // 4
    AfterContentChecked, // 5
    AfterViewInit, // 6
    AfterViewChecked, // 7
    OnDestroy // 8
  } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>lifecycle Works!</p>
  `,
  styles: []
})
export class LifecycleComponent 
  implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }
  ngOnInit() { this.log("ngOnInit"); }
  ngOnChanges() { this.log("ngOnChanges"); }
  ngDoCheck() { this.log("ngDoCheck"); }
  ngAfterContentInit() { this.log("ngAfterContentInit"); }
  ngAfterContentChecked() { this.log("ngAfterContentChecked"); }
  ngAfterViewInit() { this.log("ngAfterViewInit"); }
  ngAfterViewChecked() { this.log("ngAfterViewChecked"); }
  ngOnDestroy() { this.log("ngOnDestroy"); }
  private log(hook: string) {console.log(hook);}
}
