import { Routes } from '@angular/router';

// components
import { ServerOfflineComponent } from './server-offline.component';

export const routes: Routes = [
	{
		path: '',
		component: ServerOfflineComponent,
		data: {
			permissions: ['RL_DEFAULT']
		}
	}
];
