import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// componets
import { BaseLayoutComponent } from './component/base-layout.component';

// services
import { BaseLayoutService } from './services/base-layout.service';
import { StorageService } from '../shared/services/storage.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    BaseLayoutComponent,
    SidebarComponent
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
    StorageService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BaseLayoutModule { }
