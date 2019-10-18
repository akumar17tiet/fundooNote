import { TestBed } from '@angular/core/testing';

import { DataservicesService } from './dataservices.service';

describe('DataservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataservicesService = TestBed.get(DataservicesService);
    expect(service).toBeTruthy();
  });
});
