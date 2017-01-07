import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertybindingComponent } from './databinding/propertybinding.component';
import { StringinterpolationbindingComponent } from './databinding/stringinterpolationbinding.component';
import { CustompropertybindingComponent } from './databinding/custompropertybinding.component';
import { EventbindingComponent } from './databinding/eventbinding.component';
import { LifecycleComponent } from './lifecycle.component';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    PropertybindingComponent,
    StringinterpolationbindingComponent,
    CustompropertybindingComponent,
    EventbindingComponent,
    LifecycleComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
