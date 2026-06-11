import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable, catchError, of, shareReplay } from 'rxjs';
import { Locations } from '../../models/locations';
import { Master } from '../../services/master';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'; 

export const sameLocationValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const fromLoc = control.get('fromLoc')?.value;
  const toLoc = control.get('toLoc')?.value;
  return fromLoc && toLoc && fromLoc === toLoc ? { sameLocation: true } : null;
};

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

  protected loadError: string | null = null;

  protected readonly locations$: Observable<Locations[]> = this.master
    .getLocations()
    .pipe(
      catchError(() => {
        this.loadError =
          'Failed to load stations. Stop ng serve and run it again.';
        return of([] as Locations[]);
      }),
      shareReplay(1),
    );

  searchForm = new FormGroup({
    fromLoc: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    toLoc: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    travelDate: new FormControl<string>(this.today, { nonNullable: true, validators: [Validators.required] }),
  }, { validators: sameLocationValidator });

  onSubmit() {
    if (this.searchForm.valid) {
      console.log('Search Form Submitted:', this.searchForm.value);
    }
  }

  swapStations() {
    const fromLoc = this.searchForm.get('fromLoc')?.value;
    const toLoc = this.searchForm.get('toLoc')?.value;
    this.searchForm.patchValue({
      fromLoc: toLoc,
      toLoc: fromLoc
    });
  }

}

function toDateInputValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}