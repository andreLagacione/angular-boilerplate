import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy, DatePipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// components
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './base-layout/component/base-layout.component';

// modules
import { BaseLayoutModule } from './base-layout/base-layout.module';
import { ToasterModule } from './toaster/toaster.module';

// services
import { AuthGuard } from './security/auth/auth.guard';

// rotas
import { rootRouterConfig } from './app.routes';
import { LoginRoutes } from './login/login.routes';
import { HomeRoutes } from './home/home.routes';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BaseLayoutModule,
    ToasterModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig),
    RouterModule.forRoot(LoginRoutes.getRoutes(null, 'src/app')),
    RouterModule.forRoot(HomeRoutes.getRoutes(BaseLayoutComponent, 'src/app', AuthGuard)),

  ],
  providers: [
    Title,
    DatePipe,
    {
      provide: localePt,
      useValue: 'pt-BR'
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
