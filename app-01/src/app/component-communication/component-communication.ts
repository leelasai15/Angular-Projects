import { Component } from '@angular/core';
import { Child } from './child/child';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-communication',
  imports: [Child, FormsModule],
  templateUrl: './component-communication.html',
  styleUrl: './component-communication.css',
})
export class ComponentCommunication {
  messageForChild: string = 'Hello from Parent Component!';
  receivedFromChild: string = '';

  receiveMessage($event: string) {
    this.receivedFromChild = $event;
  }
}
