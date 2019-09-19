import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// routes
import { routes } from './routes';

// components
import { NotFoundComponent } from './not-found.component';

// modules
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		SharedModule
	],
	declarations: [
		NotFoundComponent
	]
})
export class NotFoundModule { }
