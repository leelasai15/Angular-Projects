import { Component } from '@angular/core';
import { DataBinding } from './data-binding/data-binding';
import { BuiltInDirectives } from './built-in-directives/built-in-directives';
import { BuiltInPipes } from './built-in-pipes/built-in-pipes';
import { ComponentCommunication } from './component-communication/component-communication';

@Component({
  selector: 'app-root',
  imports: [DataBinding, BuiltInDirectives, BuiltInPipes, ComponentCommunication],     
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentView: string = 'data-binding';

  setView(viewName: string) {
    this.currentView = viewName;
  }
}
