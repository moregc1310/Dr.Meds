import { TestBed } from '@angular/core/testing';

import { GoldGuardGuard } from './gold-guard.guard';

describe('GoldGuardGuard', () => {
  let guard: GoldGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GoldGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
