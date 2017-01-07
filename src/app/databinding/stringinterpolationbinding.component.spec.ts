/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StringinterpolationbindingComponent } from './stringinterpolationbinding.component';

describe('StringinterpolationbindingComponent', () => {
  let component: StringinterpolationbindingComponent;
  let fixture: ComponentFixture<StringinterpolationbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringinterpolationbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringinterpolationbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
