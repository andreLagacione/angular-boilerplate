import { Type } from '@angular/core';
import { Routes } from '@angular/router';

export class AccessDeniedRoutes {
	static getRoutes(layoutComponent: Type<any>, moduleBasePath: string, canActivate: any): Routes {
		return [
			{
				component: layoutComponent,
				path: 'access-denied',
				data: {
					permissions: ['RL_DEFAULT']
				},
				canActivate: [canActivate],
				canActivateChild: [canActivate],
				loadChildren: `${moduleBasePath}/access-denied/access-denied.module#AccessDeniedModule`
			}
		];
	}
}
