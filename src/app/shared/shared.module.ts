import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// classes
import { ErrorInterceptor } from '../security/auth/http-request-interceptor';

// modules
import { ButtonsModule } from './components/buttons/buttons.module';
import { SidebarFilterModule } from './components/sidebar-filter/sidebar-filter.module';
import { ToggleModule } from './components/toggle/toggle.module';
import { PaginationModule } from './components/pagination/pagination.module';
import { ConfirmModalModule } from './components/confirm-modal/confirm-modal.module';
import { FooterListModule } from './components/footer-list/footer-list.module';

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
		ConfirmModalModule.forRoot(),
		FooterListModule.forRoot()
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
		ConfirmModalModule,
		FooterListModule
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
