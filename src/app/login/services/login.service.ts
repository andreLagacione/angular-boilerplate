import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// services
import { BaseService } from 'src/app/shared/services/base.service';

// models
import { LoginModel } from '../models/login.model';

@Injectable()
export class LoginService extends BaseService {

    constructor(
        private http: HttpClient,
        public injector: Injector
    ) {
        super(injector);
    }

    public loginRegister(params: LoginModel): Observable<string> {
        return this.http
            .post(`${this.autentication}/login`, params)
            .pipe(
                map(super.extractData),
                catchError(this.mapsError)
            );
    }
}
