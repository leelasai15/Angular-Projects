import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() parentMessage: string = '';
  @Output() childEvent = new EventEmitter<string>();

  sendMessageToParent() {
    this.childEvent.emit('Hello from Child Component!');
  }
}
