import { PageableModel } from './pageable.model';
import { SortModel } from './sort.model';

export class DefaultListModel<T> {
	content: T[];
	first: boolean;
	last: boolean;
	number: number;
	numberOfElements: number;
	pageable: PageableModel;
	size: number;
	sort: SortModel;
	totalElements: number;
	totalPages: number;
}
