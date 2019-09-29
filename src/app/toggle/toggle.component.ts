import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-toggle',
	templateUrl: './toggle.component.html',
	styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
	@Output() public statusChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	@Input() status: boolean;
	@Input() disabled: boolean;
	@Input() small: boolean;
	@Input() noMargin: boolean;

	public toggleStatus() {
		if (this.disabled) {
			return false;
		}

		this.status = !this.status;

		setTimeout(() => {
			this.statusChange.emit(this.status);
		}, 300);
	}

}
