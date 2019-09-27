import { SortModel } from './sort.model';

export class PageableModel {
	offset: number;
	pageNumber: number;
	pageSize: number;
	paged: boolean;
	sort: SortModel;
	unpaged: boolean;
}
