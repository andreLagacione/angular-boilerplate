import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// route
import { routes } from './routes';

// components
import { HomeComponent } from './home.component';

// modules
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		SharedModule
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class HomeModule { }
