import { TestBed } from '@angular/core/testing';

import { BggService } from './bgg.service';

describe('BggService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BggService = TestBed.get(BggService);
    expect(service).toBeTruthy();
  });
});
