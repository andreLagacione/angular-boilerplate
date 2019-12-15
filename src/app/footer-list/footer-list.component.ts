import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FooterListService } from './services/footer-list.service';
import { PaginationService } from '../pagination/services/pagination.service';

@Component({
	selector: 'app-footer-list',
	templateUrl: './footer-list.component.html',
	styleUrls: ['./footer-list.component.scss']
})
export class FooterListComponent implements OnInit {
	@Input() public paginationParams: object;
	@Input() public addMargin: boolean;

	public page: string;
	public totalPages: string;
	public itemsPerPage = ['25', '50', '75', '100'];

	public pageSizeControl = new FormGroup({
		pageSize: new FormControl('25')
	});

	constructor(
		private footerListService: FooterListService,
		private paginationService: PaginationService
	) { }

	ngOnInit() {
		this.page = this.paginationParams['number'];
		this.totalPages = this.paginationParams['totalPages'];
		this.paginationService.init(this.paginationParams);
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
