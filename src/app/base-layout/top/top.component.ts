import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// services
import { BaseLayoutService } from '../services/base-layout.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
	selector: 'app-top',
	templateUrl: './top.component.html',
	styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnDestroy {
	private unsubscribe$: Subject<void> = new Subject<void>();
	public companies: object[] = [];
	public showUserMenu = false;
	public showMenuCompanies = false;
	public selectedCompany: object;
	public formSearch = new FormGroup({
		input: new FormControl('')
	});
	public formSearchCompany = new FormGroup({
		input: new FormControl('')
	});

	constructor(
		private baseLayoutService: BaseLayoutService,
		private storageService: StorageService
	) {
		this.baseLayoutService.controlUserMenu$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.showUserMenu = _response
			);

		this.baseLayoutService.controlCompaniesMenu$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.showMenuCompanies = _response
			);

		this.baseLayoutService.updateCompaniyList$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => {
					this.companies = _response;
					this.mapSelectedCompany(this.storageService.getStorage('selectedCompany'));
				}
			);
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	public controlUserMenu() {
		this.showUserMenu = !this.showUserMenu;
	}

	public searchContent(event: Event) {
		event.preventDefault();
		const value = this.formSearch.value.input;
	}

	public searchCompany(event: Event) {
		event.preventDefault();
		const value = this.formSearchCompany.value.input;
	}

	public getSelectedCompany(company: object) {
		this.selectedCompany = company;
		this.storageService.setSelectedCompany(company['id']);
	}

	private mapSelectedCompany(idSelected: string) {
		for (const item of this.companies) {
			if (idSelected === item['id']) {
				this.selectedCompany = item;
				break;
			}
		}
	}

	public controlCompaniesMenu() {
		this.showMenuCompanies = !this.showMenuCompanies;
	}

	public closeCompaniesMenu() {
		this.showMenuCompanies = false;
	}

}
