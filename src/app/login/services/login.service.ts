import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// services
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

// models
import { LoginModel } from '../models/login.model';

@Injectable()
export class LoginService extends BaseResourceService<LoginModel> {

	constructor(
		public injector: Injector
	) {
		super('login', injector);
	}

	public loginRegister(params: LoginModel): Observable<string> {
		return this.http
			.post(`${this.url}/login`, params)
			.pipe(
				map(super.extractData),
				catchError(this.mapsError)
			);
	}
}
