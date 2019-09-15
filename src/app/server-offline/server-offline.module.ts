import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// rotas
import { routes } from './routes';

// componentes
import { ServerOfflineComponent } from './server-offline.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		ServerOfflineComponent
	]
})
export class ServerOfflineModule { }
