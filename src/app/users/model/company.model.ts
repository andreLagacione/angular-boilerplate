import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class CompanyModel extends BaseResourceModel {
	id?: string;
	name?: string;

	constructor() {
		super();
	}
}
