import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// classes
import { ErrorInterceptor } from '../security/auth/http-request-interceptor';

// componets
import { BaseLayoutComponent } from './component/base-layout.component';

// services
import { BaseLayoutService } from './services/base-layout.service';
import { StorageService } from '../shared/services/storage.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    BaseLayoutComponent,
    SidebarComponent,
    TopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BaseLayoutComponent,
    SidebarComponent
  ],
  providers: [
    BaseLayoutService,
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BaseLayoutModule { }
