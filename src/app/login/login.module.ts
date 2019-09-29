import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// route
import { routes } from './routes';

// components
import { LoginComponent } from './component/login.component';

// services
import { LoginService } from './services/login.service';
import { StorageService } from '../shared/services/storage.service';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes),
	],
	providers: [
		LoginService,
		StorageService
	],
	exports: [LoginComponent]
})
export class LoginModule { }
