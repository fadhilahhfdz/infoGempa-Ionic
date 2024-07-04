import { TestBed } from '@angular/core/testing';

import { InfoGempaService } from './info-gempa.service';

describe('InfoGempaService', () => {
  let service: InfoGempaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoGempaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
