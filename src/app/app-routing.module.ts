import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterModel } from './constants/route.model';
import { ClientViewComponent } from './pages/client-view/client-view.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductsComponent } from './pages/products/products.component';

const ROUTE = { ...RouterModel.ROUTES };

const routes: Routes = [
  { path: ROUTE.PRODUCTS, component: ProductsComponent },
  { path: ROUTE.CLIENTS, component: ClientsComponent },
  { path: ROUTE.PRODUCTS_VIEW, component: ProductViewComponent },
  { path: ROUTE.CLIENTS_VIEW, component: ClientViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
