import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LoaderComponent } from './loader.component';

// services
import { LoaderService } from './services/loader.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		LoaderComponent
	],
	providers: [
		LoaderService
	]
})
export class LoaderModule {}
