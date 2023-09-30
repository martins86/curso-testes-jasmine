import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('Testando o AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('Deve instanciar o AuthService', () => {
    expect(service).toBeTruthy();
  });
});
