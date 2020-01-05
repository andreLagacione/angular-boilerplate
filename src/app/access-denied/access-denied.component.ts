import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-access-denied',
	templateUrl: './access-denied.component.html'
})
export class AccessDeniedComponent {

	constructor(
		private router: Router
	) { }

	public toHome() {
		this.router.navigate(['/home']);
	}

}
