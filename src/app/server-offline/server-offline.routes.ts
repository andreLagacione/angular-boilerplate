import { Type } from '@angular/core';
import { Routes } from '@angular/router';

export class ServerOfflineRoutes {

	static getRoutes(layoutComponent: Type<any>, moduleBasePath: string, canActivate: any): Routes {
		return [
			{
				component: layoutComponent,
				path: 'server-offline',
				data: {
					permissions: ['RL_DEFAULT']
				},
				canActivate: [canActivate],
				canActivateChild: [canActivate],
				loadChildren: moduleBasePath + '/server-offline/server-offline.module#ServerOfflineModule'
			}
		];
	}
}
