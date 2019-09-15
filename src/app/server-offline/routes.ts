import { Routes } from '@angular/router';

// components
import { ServerOfflineComponent } from './server-offline.component';

export const routes: Routes = [
	{
		path: '',
		component: ServerOfflineComponent,
		data: {
			roles: ['RL_DEFAULT']
		}
	}
];
