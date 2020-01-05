import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// services
import { BaseLayoutService } from '../services/base-layout.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ToasterService } from 'src/app/shared/components/toaster/services/toaster.service';

@Component({
	selector: 'app-base-layout',
	templateUrl: './base-layout.component.html',
	styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit, OnDestroy {
	private unsubscribe$: Subject<void> = new Subject<void>();
	public toggleMenu = false;
	public showLoader = false;

	constructor(
		private baseLayoutService: BaseLayoutService,
		private storageService: StorageService,
		private toasterService: ToasterService
	) {
		this.baseLayoutService.loaderControl$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.showLoader = _response
			);
	}

	ngOnInit() {
		this.getEssentialComponents();
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	private getEssentialComponents() {
		this.baseLayoutService.getBaseApp()
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => {
					this.storageService.setPermissions(_response[0]);
					this.baseLayoutService.updateCompaniyList(_response[1]);
					this.baseLayoutService.updateMenuList(_response[2]);
				},
				_error => this.toasterService.error(_error)
			);
	}

	@HostListener('click', ['$event.target'])
	onClick(event: HTMLElement) {
		const isUserBox = event.className.split(' ').includes('control-user-menu');
		const isCompaniesBox = event.className.split(' ').includes('control-companies-menu');

		if (!isUserBox) {
			this.baseLayoutService.controlUserMenu(false);
		}

		if (!isCompaniesBox) {
			this.baseLayoutService.controlCompaniesMenu(false);
		}
	}

}
