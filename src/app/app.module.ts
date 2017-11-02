import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarModule} from './car/car.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),

    CarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
