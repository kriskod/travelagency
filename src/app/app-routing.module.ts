import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { TourlistComponent } from './tourlist/tourlist.component';
import { TourdetailComponent } from './tourdetail/tourdetail.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AddtourComponent } from './addtour/addtour.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from './services/auth-guard';
import { AdminComponent } from './admin/admin.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';


const routes: Routes = [
  { path: '', redirectTo: "/app", pathMatch: 'full' },
  { path: 'rejestracja', component: RegistrationComponent },
  { path: 'logowanie', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'app', component: HomeComponent, canActivate:[AuthGuard], children: [
      { path: '', redirectTo: "lista-wycieczek", pathMatch: 'full' },
      { path: 'dodaj-wycieczke', component: AddtourComponent },
      { path: 'koszyk', component: ShoppingcartComponent },
      { path: 'lista-wycieczek', component: TourlistComponent },
      { path: 'szczegoly-wycieczki/:id', component: TourdetailComponent },
      { path: 'rezerwacja', component: ReservationComponent },
      { path: 'regulamin', component: RegulationsComponent },
      { path: 'strona-glowna', component: MainPageComponent},
      { path: 'admin', component: AdminComponent},
      { path: 'zamowienia', component: OrderHistoryComponent},
      { path: 'ustawienia', component: UserSettingsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
