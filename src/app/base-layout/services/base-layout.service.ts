import { Injectable, Injector, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// services
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable()
export class BaseLayoutService extends BaseService {
    public updateMenuList$: EventEmitter<object[]> = new EventEmitter<object[]>();

    constructor(
        private http: HttpClient,
        public injector: Injector
    ) {
        super(injector);
    }

    public getBaseApp() {
        const permissions = this.genericGet('permissoes');
        const companies = this.genericGet('empresas');
        const menus = this.genericGet('menus');

        return forkJoin([permissions, companies, menus]);
    }

    private genericGet(route: string): Observable<any> {
        return this.http
            .get(`${this.autentication}/${route}`, this.httpJsonAuth())
            .pipe(
                map(super.extractData),
                catchError(this.mapsError)
            );
    }
    
    public updateMenuList(menuList: object[]) {
        this.updateMenuList$.emit(menuList);
    }
}
