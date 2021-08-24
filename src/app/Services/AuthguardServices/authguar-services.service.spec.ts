import { TestBed } from '@angular/core/testing';

import { AuthguarServicesService } from './authguar-services.service';

describe('AuthguarServicesService', () => {
  let service: AuthguarServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguarServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
