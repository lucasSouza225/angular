import { TestBed } from '@angular/core/testing';

import { Coments } from './coments';

describe('Coments', () => {
  let service: Coments;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Coments);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
