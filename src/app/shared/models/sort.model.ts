// models
import { BaseResourceModel } from './base-resource.model';

export class SortModel extends BaseResourceModel {
	public unsorted?: boolean;
	public sorted?: boolean;
	public empty?: boolean;

	constructor() {
		super();
	}
}
