import { TestBed } from '@angular/core/testing';

import { WebtestService } from './webtest.service';

describe('WebtestService', () => {
  let service: WebtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
