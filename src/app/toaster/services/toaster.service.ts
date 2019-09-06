import { Injectable } from '@angular/core';

// services
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToasterService {
	constructor(
		private toastr: ToastrService,
	) { }

	public success(message: string) {
		this.toastr.success(message, 'Sucesso!');
	}

	public error(message: string) {
		this.toastr.error(message, 'Erro!');
	}

	public warning(message: string) {
		this.toastr.warning(message, 'Atenção!');
	}

	public info(message: string, title: string) {
		this.toastr.info(message, title);
	}
}
