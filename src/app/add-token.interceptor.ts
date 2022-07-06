import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let myToken = localStorage.getItem('GLN_TOKEN');
    if (myToken) {
      let cloneRequest = request.clone({
        headers: new HttpHeaders().set('Authorization', `bearer ${myToken}`),
      });
      return next.handle(cloneRequest);
    }
    return next.handle(request);
  }
}

export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AddTokenInterceptor,
  multi: true,
};
