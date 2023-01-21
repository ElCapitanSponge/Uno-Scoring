import { TestBed } from '@angular/core/testing';

import { UnoTypesService } from './uno-types.service';

describe('UnoTypesService', () => {
  let service: UnoTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnoTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
