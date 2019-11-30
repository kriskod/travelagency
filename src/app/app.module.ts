import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TourlistComponent } from './tourlist/tourlist.component';
import { TourComponent } from './tour/tour.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TourlistComponent,
    TourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
