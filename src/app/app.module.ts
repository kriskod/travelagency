import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TourlistComponent } from './tourlist/tourlist.component';
import { TourComponent } from './tour/tour.component';
import { AddtourComponent } from './addtour/addtour.component';
import { RatingModule } from 'ng-starrating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TourdetailComponent } from './tourdetail/tourdetail.component';
import { HomeComponent } from './home/home.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { ReservationComponent } from './reservation/reservation.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterComponent } from './filter/filter.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from './models/material.module';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NgxSpinnerModule } from "ngx-spinner";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TourlistComponent,
    TourComponent,
    AddtourComponent,
    ShoppingcartComponent,
    FooterComponent,
    TourdetailComponent,
    HomeComponent,
    CurrencyPipe,
    ReservationComponent,
    FilterPipe,
    FilterComponent,
    DashboardComponent,
    RegistrationComponent,
    LoginComponent,
    MainPageComponent,
    RegulationsComponent,
    AdminComponent,
    ProgressSpinnerComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    ),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    NgbModule,
    AngularFireDatabaseModule,
    MaterialModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddtourComponent, FilterComponent]
})
export class AppModule { }
