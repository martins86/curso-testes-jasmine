import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingService } from '@services/loading/loading.service';

import { LoadingSpinnerComponent } from '@components/loading-spinner/loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;
  let loadingService: LoadingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingSpinnerComponent],
      providers: [LoadingService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    loadingService = TestBed.inject(LoadingService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create LoadingSpinnerComponent', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('should the loadingMode start value be equal to false', () => {
    // Assert
    expect(component.loadingMode).toBe(false);
  });

  it('should the color start value be equal to warn', () => {
    // Assert
    expect(component.color).toBe('warn');
  });

  it('should the mode start value be equal to indeterminate', () => {
    // Assert
    expect(component.mode).toBe('indeterminate');
  });

  it('should be called service Loading', () => {
    // Arrange
    spyOn(loadingService, 'getLoading');

    // Act
    component.ngOnInit();

    // Assert
    expect(loadingService.getLoading).toHaveBeenCalledTimes(1);
  });
});
