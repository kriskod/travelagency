import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TourlistComponent } from './tourlist/tourlist.component';
import { TourComponent } from './tour/tour.component';
import { RatingComponent } from './rating/rating.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { StarRatingModule } from 'angular-star-rating';
import { AddtourComponent } from './addtour/addtour.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TourlistComponent,
    TourComponent,
    RatingComponent,
    AddtourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarRatingModule,
    StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
