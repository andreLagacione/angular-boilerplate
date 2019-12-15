import { Type } from '@angular/core';
import { Routes } from '@angular/router';

export class HomeRoutes {
	static getRoutes(layoutComponent: Type<any>, moduleBasePath: string, canActivate: any): Routes {
		return [
			{
				component: layoutComponent,
				path: 'home',
				data: {
					permissions: ['RL_DEFAULT']
				},
				canActivate: [canActivate],
				canActivateChild: [canActivate],
				loadChildren: `${moduleBasePath}/home/home.module#HomeModule`
			}
		];
	}
}
