import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { TourlistComponent } from './tourlist/tourlist.component';
import { TourdetailComponent } from './tourdetail/tourdetail.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: TourlistComponent },
  { path: 'Koszyk', component: ShoppingcartComponent },
  { path: 'Lista-wycieczek', component: TourlistComponent },
  { path: 'Szczegóły-wycieczki/:id', component: TourdetailComponent }
  //{ path: 'Rejestracja/:id', component: RegisterComponent }
  //{ path: 'Logowanie/:id', component: LoggingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
