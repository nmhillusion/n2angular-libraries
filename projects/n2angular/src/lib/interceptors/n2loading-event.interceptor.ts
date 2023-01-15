import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { tap } from "rxjs/operators";
import { N2LoadingPublisher } from "../publisher/n2loading.publisher";

@Injectable()
export class N2LoadingEventInterceptor implements HttpInterceptor {
  constructor(private _loadingEventPublisher: N2LoadingPublisher) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log("start request in n2 ===> ");
    this._loadingEventPublisher.emitStart();

    return next.handle(request).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          console.log("<== finished request in n2: ", evt);
          this._loadingEventPublisher.emitEnd();
        }
      })
    );
  }
}
