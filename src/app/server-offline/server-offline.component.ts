import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-offline',
	templateUrl: './server-offline.component.html'
})
export class ServerOfflineComponent {

	constructor(
		private router: Router
	) { }

	public voltar() {
		this.router.navigate(['/home']);
	}

}
