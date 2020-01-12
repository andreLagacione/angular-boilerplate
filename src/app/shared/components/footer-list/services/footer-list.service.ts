import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class FooterListService {
	public initFotterList$: EventEmitter<object> = new EventEmitter();
	public changeItemsPerPage$: EventEmitter<string> = new EventEmitter();
	public changePageEvent$: EventEmitter<string> = new EventEmitter();

	constructor() { }

	public initFotterList(pageParams: object) {
		this.initFotterList$.emit(pageParams);
	}

	public changeItemsPerPage(itemsPerPage: string) {
		this.changeItemsPerPage$.emit(itemsPerPage);
	}

	public changePageEvent(page: string) {
		this.changePageEvent$.emit(page);
	}
}
