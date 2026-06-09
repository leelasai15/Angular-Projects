import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable, catchError, of, shareReplay } from 'rxjs';
import { Locations } from '../../models/locations';
import { Master } from '../../services/master';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  private readonly master = inject(Master);

  protected readonly minDate = toDateInputValue(new Date());
  protected readonly today = this.minDate;

  protected readonly locations$: Observable<Locations[]> = this.master
    .getLocations();

  searchForm = new FormGroup({
    fromLoc: new FormControl<string>('', { nonNullable: true }),
    toLoc: new FormControl<string>('', { nonNullable: true }),
    travelDate: new FormControl<string>(this.today, { nonNullable: true }),
  });

  onSubmit() {
    console.log('Search Form Submitted:', this.searchForm.value);
  }

}

function toDateInputValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// .pipe(
//   catchError(() => {
//     this.loadError =
//       'Failed to load stations. Stop ng serve and run it again.';
//     return of([] as Locations[]);
//   }),
//   shareReplay(1),
// );