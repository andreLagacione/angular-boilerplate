import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

// services
import { BaseLayoutService } from '../services/base-layout.service';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
	@Output() toggleMenuEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

	private unsubscribe$: Subject<void> = new Subject<void>();
	public menuFixed = true;
	public isShort = false;
	public menuList: object[] = [];
	private nameCategoryOpen: string;

	constructor(
		private baseLayoutService: BaseLayoutService,
	) {
		this.baseLayoutService.updateMenuList$
			.pipe(
				takeUntil(this.unsubscribe$)
			)
			.subscribe(
				_response => this.menuList = _response
			);
	}

	/**
	 * Programar para o iten do menu ficar destacado quando estiver na pagina diferente da home,
	 * se estou na tela de consulta de cte o item de menu que da acesso a essa tela fica azul.
	 */

	ngOnInit() {
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	public controlFixMenu() {
		this.menuFixed = !this.menuFixed;
		this.toggleMenuEvent.emit(this.menuFixed);
	}

	public mouseEnterEvent() {
		if (!this.menuFixed) {
			this.isShort = false;
			this.checkWhatCategoryWasOpened();
		}
	}

	public mouseLeaveEvent() {
		if (!this.menuFixed) {
			this.isShort = true;
			this.closeAllCategories();
		}
	}

	public controlCategory(item: object, isOpen: boolean) {
		this.nameCategoryOpen = '';
		this.closeAllCategories();

		if (!isOpen) {
			this.nameCategoryOpen = item['nome'];
		}

		item['open'] = !isOpen;
	}

	private closeAllCategories() {
		this.menuList.map(item => {
			item['open'] = false;
		});
	}

	private checkWhatCategoryWasOpened() {
		for (let item of this.menuList) {
			if (item['nome'] === this.nameCategoryOpen) {
				item['open'] = true;
			}
		}
	}

}
