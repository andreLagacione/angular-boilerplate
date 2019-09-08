import { Component, OnDestroy } from '@angular/core';
// service
import { LoaderService } from './services/loader.service';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnDestroy {
	private destroyLoaderService: any;
	public show = false;

	constructor(
		private loaderService: LoaderService
	) {
		this.destroyLoaderService = this.loaderService.loaderControl$
			.subscribe(
				_response => this.show = _response
			);
	}

	ngOnDestroy() {
		this.destroyLoaderService.unsubscribe();
	}

}
