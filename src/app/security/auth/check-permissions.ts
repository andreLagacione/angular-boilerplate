export class CheckPermissions {

	public static check(routerPermissions: string[], systemPermissions: string[]): boolean {
		if (routerPermissions) {
			for (const permission of routerPermissions) {
				if (systemPermissions) {
					if (systemPermissions.includes(permission)) {
						return true;
					}
				}
			}
		}

		return false;
	}

}
