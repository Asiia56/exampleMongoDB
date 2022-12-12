import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    const authJwtToken = localStorage.getItem("authJwtToken"); //check local storage if auth web token present

    if (authJwtToken) {
      const cloned = req.clone({ //clone and add extra header
        headers: req.headers.set('Authorization', `${authJwtToken}`)
      });
      return next.handle(cloned);
    }

    else {//go through w/o further modification
      return next.handle(req);
    }
  }
}
