import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// routes
import { routes } from './routes';

// componets
import { AccessDeniedComponent } from './access-denied.component';

// modules
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [AccessDeniedComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		SharedModule
	]
})
export class AccessDeniedModule { }
