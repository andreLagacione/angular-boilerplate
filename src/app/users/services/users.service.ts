import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

// model
import { UsersModel } from '../model/users.model';

@Injectable({
	providedIn: 'root'
})
export class UsersService extends BaseResourceService<UsersModel> {

	constructor(public injector: Injector) {
		super('users', injector);
	}

}
