import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import {
  MatProgressSpinnerModule,
  ProgressSpinnerMode,
} from '@angular/material/progress-spinner';

import { LoadingService } from '@services/loading/loading.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  standalone: true,
  imports: [NgIf, MatProgressSpinnerModule],
})
export class LoadingSpinnerComponent implements OnInit {
  loadingMode: boolean = false;
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingMode = this.loadingService.getLoading();
  }
}
