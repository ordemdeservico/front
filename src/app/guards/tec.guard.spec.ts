import { TestBed } from '@angular/core/testing';

import { TecGuard } from './tec.guard';

describe('TecGuard', () => {
  let guard: TecGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TecGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
