import { Routes } from '@angular/router';

// components
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRegisterComponent } from './users-register/users-register.component';

export const routes: Routes = [
	{
		path: '',
		children: [{
			path: '',
			component: UsersListComponent,
			data: {
				permissions: ['RL_DEFAULT']
			}
		}, {
			path: 'create',
			component: UsersRegisterComponent,
			data: {
				permissions: ['RL_DEFAULT']
			}
		}, {
			path: 'edit/:id',
			component: UsersRegisterComponent,
			data: {
				permissions: ['RL_DEFAULT']
			}
		}]
	}
];
