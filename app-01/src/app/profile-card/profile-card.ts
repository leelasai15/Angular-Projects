import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  imports: [FormsModule],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  // 1. Data for Interpolation
  characterName: string = 'Brave Knight';
  level: number = 1;
  
  // 2. Data for Property Binding
  characterImage: string = 'https://api.dicebear.com/7.x/adventurer/svg?seed=Felix';
  maxLevel: number = 10;

  // New: State for Edit Mode
  isEditMode: boolean = false;

  // 3. Method for Event Binding
  levelUp() {
    if (this.level < this.maxLevel) {
      this.level++;
    }
  }

  // New: Method to toggle Edit Mode
  toggleEdit() {
    this.isEditMode = !this.isEditMode;
  }
}
