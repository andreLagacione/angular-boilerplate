import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private host = location.host;
    private mapStorages = {
        token: `${this.host}:TOKEN`,
        selectedCompany: `${this.host}:COMPANY`,
        user: `${this.host}:USER`,
        expirationTime: `${this.host}:EXPIRATION_TIME`,
        permissions: `${this.host}:PERMISSIONS`,
    };

    constructor() { }

    private setStorage(key: string, value: string) {
        window.localStorage.setItem(key, value);
    }

    public getStorage(key: string): string {
        return window.localStorage.getItem(this.mapStorages[key]);
    }

    public clearStorage() {
        window.localStorage.clear();
    }

    public setToken(token: string) {
        this.setStorage(this.mapStorages.token, token);
    }

    public setSelectedCompany(company: string) {
        this.setStorage(this.mapStorages.selectedCompany, company);
    }

    public setUser(user: string) {
        this.setStorage(this.mapStorages.user, user);
    }

    public setPermissions(permissions: string) {
        this.setStorage(this.mapStorages.permissions, permissions);
    }

    public setExpirationTime(time: number) {
        this.setStorage(this.mapStorages.expirationTime, time.toString());
    }
}
