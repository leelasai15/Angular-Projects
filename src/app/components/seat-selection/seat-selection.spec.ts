import { TestBed } from '@angular/core/testing';
import { SeatSelection } from './seat-selection';

describe('SeatSelection', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatSelection],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SeatSelection);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
