import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { TourlistComponent } from './tourlist/tourlist.component';
import { TourdetailComponent } from './tourdetail/tourdetail.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AddtourComponent } from './addtour/addtour.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: "/app", pathMatch: 'full' },
  {
    path: 'app', component: HomeComponent, children: [
      { path: '', redirectTo: "/dashboard", pathMatch: 'full' },
      { path: 'Dodaj-wycieczke', component: AddtourComponent },
      { path: 'Koszyk', component: ShoppingcartComponent },
      { path: 'lista-wycieczek', component: TourlistComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'Szczegóły-wycieczki/:id', component: TourdetailComponent },
      { path: 'Rezerwacja', component: ReservationComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
