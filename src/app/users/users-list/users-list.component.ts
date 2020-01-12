import { Component, OnInit, Injector } from '@angular/core';
import { BaseResouceListComponent } from 'src/app/shared/components/base-resource-list.component';
import { UsersModel } from '../model/users.model';
import { UsersService } from '../services/users.service';

@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent extends BaseResouceListComponent<UsersModel> implements OnInit {

	constructor(
		protected injector: Injector,
		protected usersService: UsersService,
	) {
		super(injector, usersService);
	}

	ngOnInit() {
		this.getAllPageable();
	}

	protected getAllPageable() {
		this.baseParamsPage = ''; // `?sort=aluno,asc&size=${this.pageSize}&page=${this.currentPage}`;
		super.getAllPageable();
	}

}
