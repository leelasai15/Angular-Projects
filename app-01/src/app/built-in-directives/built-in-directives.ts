import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-built-in-directives',
  imports: [NgClass, NgStyle],
  templateUrl: './built-in-directives.html',
  styleUrl: './built-in-directives.css',
})
export class BuiltInDirectives {
  showContent: boolean = true;
  items: string[] = ['Angular', 'React', 'Vue', 'Svelte'];
  isHighlighted: boolean = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}
