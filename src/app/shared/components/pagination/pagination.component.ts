import { Component, EventEmitter, Output, OnDestroy, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// services
import { PaginationService } from './services/pagination.service';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {
	@Input() public activePage: number;
	@Input() public totalPages: number;
	@Output() public changePageEvent: EventEmitter<number> = new EventEmitter();

	private unsubscribe$: Subject<void> = new Subject<void>();
	public pages: Array<any>;

	constructor(
		private paginationService: PaginationService
	) {
		this.paginationService.init$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => {
					this.activePage = _response['activePage'];
					this.totalPages = _response['totalPages'];
					this.buildPagination();
				}
			);
	}

	ngOnInit() {
		this.buildPagination();
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	private buildPagination() {
		this.pages = [];

		const numRange = 9;
		const numDivide = 4;
		let startRange = 1;

		if (this.activePage - numDivide > 0 && this.totalPages > numRange) {
			startRange = this.activePage - numDivide;
		}

		if (this.activePage >= this.totalPages - numDivide && this.totalPages > numRange) {
			startRange = this.totalPages - numRange + 1;
		}

		const endRange = this.totalPages;

		for (let intX = startRange; intX <= endRange; intX++) {

			if (this.pages.length === numRange) {
				break;
			}

			this.pages.push({
				name: intX,
				active: intX === this.activePage
			});
		}
	}

	public changePage(page: number, objPage?: object) {
		if (objPage && objPage['active']) {
			return false;
		}

		if (page > 0 && page <= this.totalPages) {
			this.changePageEvent.emit(page - 1);
		}
	}

}
