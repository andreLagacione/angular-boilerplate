import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class FooterListService {
	public changeItemsPerPage$: EventEmitter<string> = new EventEmitter();
	public changePageEvent$: EventEmitter<string> = new EventEmitter();

	constructor() { }

	public changeItemsPerPage(itemsPerPage: string) {
		this.changeItemsPerPage$.emit(itemsPerPage);
	}

	public changePageEvent(page: string) {
		this.changePageEvent$.emit(page);
	}
}
