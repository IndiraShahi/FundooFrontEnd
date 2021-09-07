import { TestBed } from '@angular/core/testing';

import { LabelservicesService } from './labelservices.service';

describe('LabelservicesService', () => {
  let service: LabelservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabelservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
