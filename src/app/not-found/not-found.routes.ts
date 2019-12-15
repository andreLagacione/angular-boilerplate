import { Type } from '@angular/core';
import { Routes } from '@angular/router';

export class NotFoundRoutes {

	static getRoutes(layoutComponent: Type<any>, moduleBasePath: string, canActivate: any): Routes {
		return [
			{
				component: layoutComponent,
				path: '**',
				data: {
					permissions: ['RL_DEFAULT']
				},
				canActivate: [canActivate],
				canActivateChild: [canActivate],
				loadChildren: moduleBasePath + '/not-found/not-found.module#NotFoundModule'
			}
		];
	}
}
