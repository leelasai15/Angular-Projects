import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Locations } from '../model/locations';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Master {
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  get baseUrl(): string {
    // On the browser (client), request via local proxy '/api' to bypass CORS
    // On the server (SSR), fetch directly from the absolute API endpoint (Node has no CORS restrictions)
    return isPlatformBrowser(this.platformId)
      ? '/api/BusBooking'
      : 'https://projectapi.gerasim.in/api/BusBooking';
  }

  public getLocations(): Observable<Locations[]> {
    return this.http.get<Locations[]>(`${this.baseUrl}/GetBusLocations`);
  }
}
