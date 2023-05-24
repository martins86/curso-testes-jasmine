import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconHarness } from '@angular/material/icon/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader, parallel } from '@angular/cdk/testing';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-materials.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppMaterialModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('Testing show icons', () => {
    it('should create the icon bug_report', async () => {
      const fixture = TestBed.createComponent(AppComponent);
      const loader: HarnessLoader = TestbedHarnessEnvironment.loader(fixture);
      const icons = await loader.getAllHarnesses(MatIconHarness);

      const names = await parallel(() => icons.map(icon => icon.getName()));

      expect(names).toEqual(['bug_report']);
    })
  });
});
