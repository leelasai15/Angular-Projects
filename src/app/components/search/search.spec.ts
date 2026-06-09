import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Master } from '../../services/master';
import { Search } from './search';

describe('Search', () => {
  let fixture: ComponentFixture<Search>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Search],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: Master,
          useValue: {
            getLocations: () =>
              of([
                { locationId: 253, locationName: 'Nagpur', code: 'NGP' },
                { locationId: 270, locationName: 'Pune', code: 'PUNE' },
              ]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Search);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render location options', () => {
    const options = fixture.nativeElement.querySelectorAll('option');
    expect(options.length).toBeGreaterThan(2);
  });
});
