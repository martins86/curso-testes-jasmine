import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from '@app/app.component';

import { LayoutModule } from '@layout/layout.module';
import { LoadingSpinnerComponent } from '@components/loading-spinner/loading-spinner.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, LayoutModule, LoadingSpinnerComponent],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('Should create the app', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);

    // Act
    const app = fixture.componentInstance;

    // Assert
    expect(app).toBeTruthy();
  });
});
