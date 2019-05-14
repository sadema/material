import { TestBed } from '@angular/core/testing';

import { HomepagetestService } from './homepagetest.service';

describe('HomepagetestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomepagetestService = TestBed.get(HomepagetestService);
    expect(service).toBeTruthy();
  });
});
