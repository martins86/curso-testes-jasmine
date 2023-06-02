import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created LoadingService', () => {
    // Assert
    expect(service).toBeTruthy();
  });

  describe('Testing setLoading', () => {
    it('should the loading value be equal to false', () => {
      // Act
      service.setLoading(false);

      // Assert
      expect(service.getLoading()).toBe(false);
    });

    it('should the loading value be equal to true', () => {
      // Act
      service.setLoading(true);

      // Assert
      expect(service.getLoading()).toBe(true);
    });
  });

  describe('Testing getLoading', () => {
    it('should the loading start value be equal to false', () => {
      // Assert
      expect(service.getLoading()).toBe(false);
    });
  });
});
