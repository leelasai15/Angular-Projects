import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInDirectives } from './built-in-directives';

describe('BuiltInDirectives', () => {
  let component: BuiltInDirectives;
  let fixture: ComponentFixture<BuiltInDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInDirectives],
    }).compileComponents();

    fixture = TestBed.createComponent(BuiltInDirectives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
