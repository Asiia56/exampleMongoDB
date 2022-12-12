import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthModule } from './auth/auth.module';


const routes: Routes = [
  { path: 'cranes', loadChildren: () => import('./components/cranes-card.module').then(m => m.CranesCardModule) },
  { path: '**', redirectTo: '/' }

];

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AuthModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
