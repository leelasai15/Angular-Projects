import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  interpolation = "This is Interpolation";

  text = "Random Text";

  isActive = false;

  onFun(){
    this.isActive = !this.isActive;
  }
}
