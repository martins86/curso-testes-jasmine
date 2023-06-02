import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

import { LoadingService } from '@services/loading/loading.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private countRequests: number = 0;

  constructor(public loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.countRequests++;

    this.loadingService.setLoading(true);

    return next.handle(request).pipe(
      finalize(() => {
        this.countRequests--;
        if (this.countRequests == 0) {
          this.loadingService.setLoading(false);
        }
      })
    );
  }
}
