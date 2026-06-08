import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../service/master';
import { Observable } from 'rxjs';
import { Locations } from '../../model/locations';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit{

  service = inject(Master);
  locations$ : Observable<Locations[]> = this.service.getLocations();

  ngOnInit(): void {
    this.service.getLocations().subscribe({
      next: (res) => {
        console.log('Locations successfully loaded from API:', res);
      },
      error: (err) => {
        console.error('Failed to load locations from API:', err);
      }
    });
  }

  onSearch() {
    console.log("Search clicked!");
  }

}
