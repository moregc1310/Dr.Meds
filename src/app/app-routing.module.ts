import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldGuardGuard } from './components/gold-guard.guard';
import { GoldComponent } from './components/gold/gold.component';

import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { TopDealsByCategoryComponent } from './components/top-deals-by-category/top-deals-by-category.component';
import { ViewProductDetailsComponentComponent } from './components/view-product-details-component/view-product-details-component.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { SigninComponent } from './core/components/signin/signin.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"medicine-home",component:MedicineHomeComponent},
  {path:"top-deals-by-category",component:TopDealsByCategoryComponent},
  {path:"view-product-details/:drugCode",component:ViewProductDetailsComponentComponent},
 // {path:"sign-in",component:SigninComponent},
  {path:"Dr.Meds-Gold",component:GoldComponent,canActivate:[GoldGuardGuard]},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
