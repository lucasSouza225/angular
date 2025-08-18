import { TestBed } from '@angular/core/testing';

import { Moments } from './moments';

describe('Moments', () => {
  let service: Moments;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Moments);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
