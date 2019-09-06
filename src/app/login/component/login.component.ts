import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// services
import { LoginService } from '../services/login.service';
import { ToasterService } from 'src/app/toaster/services/toaster.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  public loading = false;
  public loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
  });

  constructor(
    private router: Router,
    private titleService: Title,
    private loginService: LoginService,
    private toasterService: ToasterService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Login | Documento Fácil');

    if (this.storageService.getStorage('token')) {
      this.router.navigate(['/home']);
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public loginRegister() {
    this.loading = true;
    const values = this.loginForm.value;

    this.loginService.loginRegister(values)
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(
        _response => {
          this.storageService.setToken(_response['uuid']);
          this.storageService.setUser(values.login);
          this.storageService.setExpirationTime(new Date().getTime() + 60 * 60000);
          this.router.navigate(['/home']);
        },
        _error => {
          this.toasterService.error(_error);
          this.loading = false;
        }
      );
  }

  get login() {
    return this.loginForm.get('login');
  }

  get pass() {
    return this.loginForm.get('pass');
  }

}
