import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class LoaderService {
	public loaderControl$: EventEmitter<boolean>;

	constructor() {
		this.loaderControl$ = new EventEmitter();
	}

	public loaderControl(abrir: boolean) {
		this.loaderControl$.emit(abrir);
	}
}
