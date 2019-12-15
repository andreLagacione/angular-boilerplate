import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRegisterComponent } from './users-register/users-register.component';

// modules
import { SharedModule } from '../shared/shared.module';

// rotas
import { routes } from './routes';

@NgModule({
	declarations: [UsersListComponent, UsersRegisterComponent],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes)
	]
})
export class UsersModule { }
