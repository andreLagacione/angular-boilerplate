import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// component
import { FooterListComponent } from './footer-list.component';

// services
import { FooterListService } from './services/footer-list.service';

// module
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
	declarations: [
		FooterListComponent
	],
	exports: [
		FooterListComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		PaginationModule.forRoot()
	],
	providers: [
		FooterListService
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class FooterListModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: FooterListModule,
			providers: [
				FooterListService
			]
		};
	}
}
