import { Type } from '@angular/core';
import { Routes } from '@angular/router';

export class UsersRoutes {
	static getRoutes(layoutComponent: Type<any>, moduleBasePath: string, canActivate: any): Routes {
		return [
			{
				component: layoutComponent,
				path: 'users',
				canActivate: [canActivate],
				canActivateChild: [canActivate],
				loadChildren: `${moduleBasePath}/users/users.module#UsersModule`
			}
		];
	}
}
