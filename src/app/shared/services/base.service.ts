import { Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';

// class
import { environment } from 'src/environments/environment';

// services
import { StorageService } from './storage.service';
import { HttpHeaders } from '@angular/common/http';

export abstract class BaseService {

    protected autentication = environment.autentication;
    private storageService: StorageService;

    constructor(
        public injector: Injector
    ) {
        this.storageService = this.injector.get(StorageService);
    }

    protected extractData(response: any) {
        return response || {};
    }

    protected httpJsonAuth() {
        return {
            headers: this.getHeader()
        };
    }

    protected getHeader() {

        const company = this.storageService.getStorage('selectedCompany');

        let header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.storageService.getStorage('token')
        });

        if (company) {
            header = header.append('EmpresaID', company);
        }

        return header;
    }

    protected mapsError(error: any): Observable<any> {
        return throwError(error);
    }
}
