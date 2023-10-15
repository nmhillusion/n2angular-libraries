import { TestBed } from '@angular/core/testing';

import { N2LayoutService } from './n2-layout.service';

describe('N2LayoutService', () => {
  let service: N2LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(N2LayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
