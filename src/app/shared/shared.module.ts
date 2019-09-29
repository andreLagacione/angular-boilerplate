import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// classes
import { ErrorInterceptor } from '../security/auth/http-request-interceptor';

// modules
import { ButtonsModule } from '../buttons/buttons.module';
import { SidebarFilterModule } from '../sidebar-filter/sidebar-filter.module';
import { ToggleModule } from '../toggle/toggle.module';
import { PaginationModule } from '../pagination/pagination.module';
import { ConfirmModalModule } from '../confirm-modal/confirm-modal.module';

// services

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		ButtonsModule,
		ToggleModule,
		SidebarFilterModule.forRoot(),
		PaginationModule.forRoot(),
		ConfirmModalModule.forRoot()
	],
	exports: [
		RouterModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		ButtonsModule,
		ToggleModule,
		SidebarFilterModule,
		PaginationModule,
		ConfirmModalModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true
		}
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class SharedModule { }
