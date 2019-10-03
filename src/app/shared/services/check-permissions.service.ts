import { Injectable } from '@angular/core';

// services
import { StorageService } from './storage.service';

@Injectable({
	providedIn: 'root'
})
export class CheckPermissionsService {

	private userPermissions: Set<string>;

	constructor(
		private storageService: StorageService
	) {
		const _permissions = this.storageService.getStorage('permissions');
		this.userPermissions = new Set(_permissions.split(','));
	}

	public checkPermission(permission: string[]): boolean {
		return this.verifyPermission(permission);
	}

	private verifyPermission(permissionToCheck: string[]): boolean {
		let hasPermission = false;

		if (permissionToCheck && permissionToCheck.length) {
			for (const permission of permissionToCheck) {
				if (this.userPermissions) {
					if (this.userPermissions.has(permission)) {
						hasPermission = true;
						break;
					}
				}
			}
		}

		return hasPermission;
	}
}
