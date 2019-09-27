import { Injectable, Injector, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// services
import { BaseService } from 'src/app/shared/services/base.service';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

@Injectable()
export class BaseLayoutService extends BaseResourceService<BaseResourceModel> {
    public updateMenuList$: EventEmitter<object[]> = new EventEmitter<object[]>();
    public loaderControl$: EventEmitter<boolean> = new EventEmitter<boolean>();
    public controlUserMenu$: EventEmitter<boolean> = new EventEmitter<boolean>();
    public controlCompaniesMenu$: EventEmitter<boolean> = new EventEmitter<boolean>();
    public updateCompaniyList$: EventEmitter<object[]> = new EventEmitter<object[]>();

    constructor(
        public injector: Injector
    ) {
        super('', injector);
    }

    public getBaseApp() {
        const permissions = this.genericGet('permissions');
        const companies = this.genericGet('companies');
        const menus = this.genericGet('menus');

        return forkJoin([permissions, companies, menus]);
    }

    public updateMenuList(menuList: object[]) {
        this.updateMenuList$.emit(menuList);
    }

    public loaderControl(show: boolean) {
        this.loaderControl$.emit(show);
    }

    public controlUserMenu(hidden: boolean) {
        this.controlUserMenu$.emit(hidden);
    }

    public controlCompaniesMenu(hidden: boolean) {
        this.controlCompaniesMenu$.emit(hidden);
    }

    public updateCompaniyList(list: object[]) {
        this.updateCompaniyList$.emit(list);
    }
}
