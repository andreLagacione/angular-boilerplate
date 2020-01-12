import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// services
import { FooterListService } from './services/footer-list.service';
import { PaginationService } from '../pagination/services/pagination.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-footer-list',
	templateUrl: './footer-list.component.html',
	styleUrls: ['./footer-list.component.scss']
})
export class FooterListComponent implements OnDestroy {
	protected unsubscribe$: Subject<void> = new Subject<void>();
	public activePage: number;
	public totalPages: string;
	public itemsPerPage = ['25', '50', '75', '100'];
	public showComponent = false;

	public pageSizeControl = new FormGroup({
		pageSize: new FormControl('25')
	});

	constructor(
		private footerListService: FooterListService,
		private paginationService: PaginationService
	) {
		this.footerListService.initFotterList$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => {
					this.showComponent = true;
					this.activePage = parseInt(_response['number'], 10) + 1;
					this.totalPages = _response['totalPages'];
					this.paginationService.init({
						activePage: this.activePage,
						totalPages: this.totalPages
					});
				}
			);
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	public convertPage(page: string): number {
		if (!page) {
			return 1;
		}

		return parseInt(page, 10) + 1;
	}

	public changeItemsPerPage() {
		this.footerListService.changeItemsPerPage(this.pageSizeControl.value.pageSize);
	}

	public changePageEvent(page: string) {
		this.footerListService.changePageEvent(page);
	}

}
