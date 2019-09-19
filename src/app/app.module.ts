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

// routes
import { rootRouterConfig } from './app.routes';
import { LoginRoutes } from './login/login.routes';
import { HomeRoutes } from './home/home.routes';
import { AccessDeniedRoutes } from './access-denied/access-denied.routes';
import { ServerOfflineRoutes } from './server-offline/server-offline.routes';
import { NotFoundRoutes } from './not-found/not-found.routes';

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
    RouterModule.forRoot(AccessDeniedRoutes.getRoutes(BaseLayoutComponent, 'src/app', AuthGuard)),
    RouterModule.forRoot(ServerOfflineRoutes.getRoutes(BaseLayoutComponent, 'src/app', AuthGuard)),

    // This router must to be the last one, because it take care invalid routes
    RouterModule.forRoot(NotFoundRoutes.getRoutes(BaseLayoutComponent, 'src/app', AuthGuard))

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
