import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

// classes
import { ErrorInterceptor } from '../security/auth/http-request-interceptor';

// modules
import { ButtonsModule } from '../buttons/buttons.module';

@NgModule({
  declarations: [],
  exports: [
    ButtonsModule
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
