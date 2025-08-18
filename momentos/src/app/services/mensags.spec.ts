import { TestBed } from '@angular/core/testing';

import { Mensags } from './mensags';

describe('Mensags', () => {
  let service: Mensags;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mensags);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
