import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class PaginationService {
	public init$: EventEmitter<object> = new EventEmitter();

	public init(init: object) {
		this.init$.emit(init);
	}
}
