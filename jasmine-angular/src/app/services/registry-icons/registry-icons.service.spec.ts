import { TestBed } from '@angular/core/testing';

import { RegistryIconsService } from './registry-icons.service';

describe('RegistryIconsService', () => {
  let service: RegistryIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistryIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
