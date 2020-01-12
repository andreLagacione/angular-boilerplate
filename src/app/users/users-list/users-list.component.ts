import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

// classes
import { BaseResouceListComponent } from 'src/app/shared/components/base-resource-list.component';

// models
import { UsersModel } from '../model/users.model';
import { CompanyModel } from '../model/company.model';

// services
import { UsersService } from '../services/users.service';

@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent extends BaseResouceListComponent<UsersModel> implements OnInit {
	public companiesList: Observable<CompanyModel>;

	constructor(
		protected injector: Injector,
		protected usersService: UsersService,
	) {
		super(injector, usersService);
	}

	ngOnInit() {
		this.getAllPageable();
		this.instantiateSidaberFormFilter();
		this.getCompaniesForFilter();
	}

	protected getAllPageable() {
		super.getAllPageable();
	}

	private instantiateSidaberFormFilter() {
		this.sidebarFormFilter = new FormGroup({
			company: new FormControl('')
		});
	}

	private getCompaniesForFilter() {
		this.companiesList = this.resourceService.getGenericList('companies/combo-list');
	}

}
