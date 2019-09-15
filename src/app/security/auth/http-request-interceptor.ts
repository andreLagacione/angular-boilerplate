import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

// services
import { StorageService } from 'src/app/shared/services/storage.service';
import { ToasterService } from 'src/app/toaster/services/toaster.service';
import { BaseLayoutService } from 'src/app/base-layout/services/base-layout.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private storageService: StorageService,
        private baseLayoutService: BaseLayoutService,
        private toasterService: ToasterService,
        private router: Router
    ) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                tap(
                    () => this.baseLayoutService.loaderControl(true)
                ),
                catchError(
                    error => {
                        if (error instanceof HttpErrorResponse) {
                            switch (error.status) {
                                case 401:
                                    this.storageService.clearStorage();
                                    this.toasterService.warning('You must to be logged to access this page or your session expired.');
                                    this.router.navigate(['/login']);
                                    break;

                                case 403:
                                    this.router.navigate(['/access-denied']);
                                    break;

                                case 0:
                                    this.router.navigate(['/server-offline']);
                                    break;
                            }
                        }

                        return throwError(error);
                    }
                ),
                finalize(
                    () => this.baseLayoutService.loaderControl(false)
                )
            );
    }
}
