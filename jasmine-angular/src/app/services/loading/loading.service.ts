import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading: boolean = false;

  setLoading(loading: boolean): void {
    this.loading = loading;
  }

  getLoading(): boolean {
    return this.loading;
  }

}
