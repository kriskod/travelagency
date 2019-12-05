import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { TourlistComponent } from './tourlist/tourlist.component';
import { TourdetailComponent } from './tourdetail/tourdetail.component';


const routes: Routes = [
  { path: '', component: TourlistComponent },
  { path: 'ShoppingCart', component: ShoppingcartComponent },
  { path: 'Tourlist', component: TourlistComponent },
  { path: 'tourDetails/:id', component: TourdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
