import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { TopBarComponent } from './default/top-bar/top-bar.component';
import { BottomBarComponent } from './default/bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [TopBarComponent, BottomBarComponent],
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatButtonModule],
  exports: [TopBarComponent, BottomBarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule {}
