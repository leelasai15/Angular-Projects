import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Locations } from '../models/locations';

@Injectable({
  providedIn: 'root',
})
export class Master {
  private readonly baseUrl = '/api/BusBooking';

  constructor(private http: HttpClient) {}

  getLocations(): Observable<Locations[]> {
    return this.http.get<Locations[]>(`${this.baseUrl}/GetBusLocations`);
  }
  
}
// .pipe(
//   map((locations) =>
//     locations.filter(
//       (location) => location.locationName?.trim(),
//     ),
//   ),
// )