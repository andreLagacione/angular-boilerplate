import { Type } from '@angular/core';
import { Routes } from '@angular/router';

export class LoginRoutes {

	static getRoutes(layoutComponent: Type<any>, moduleBasePath: string): Routes {
		return [
			{
				component: layoutComponent,
				path: 'login',
				loadChildren: `${moduleBasePath}/login/login.module#LoginModule`
			}
		];
	}
}
