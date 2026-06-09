import { TestBed } from '@angular/core/testing';
import { BookingConfirmation } from './booking-confirmation';

describe('BookingConfirmation', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingConfirmation],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BookingConfirmation);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
