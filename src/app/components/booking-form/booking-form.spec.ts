import { TestBed } from '@angular/core/testing';
import { BookingForm } from './booking-form';

describe('BookingForm', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingForm],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BookingForm);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
