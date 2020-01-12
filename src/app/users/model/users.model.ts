import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class UsersModel extends BaseResourceModel {
	name?: string;
	login?: string;
	email?: string;
	lastAccess?: number;
	company?: string;
	cpf?: number;
	phone?: number;

	constructor() {
		super();
	}
}
