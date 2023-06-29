import { TestBed } from '@angular/core/testing';

import { HomeFormService } from './home-form.service';

describe('HomeFormService', () => {
  let service: HomeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
