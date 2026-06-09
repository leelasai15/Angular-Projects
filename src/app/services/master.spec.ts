import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Master } from './master';

describe('Master', () => {
  let service: Master;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(Master);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch and filter locations', () => {
    service.getLocations().subscribe((locations) => {
      expect(locations.length).toBe(1);
      expect(locations[0].locationName).toBe('Nagpur');
    });

    const req = httpMock.expectOne('/api/BusBooking/GetBusLocations');
    expect(req.request.method).toBe('GET');
    req.flush([
      { locationId: 253, locationName: 'Nagpur', code: 'NGP' },
      { locationId: 1, locationName: '', code: '' },
    ]);
  });
});
