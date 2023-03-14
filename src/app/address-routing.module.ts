import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesComponent } from './addresses/addresses.component';
import { CreateAddressComponent } from './create-address/create-address.component';

const routes: Routes=[
  {
  path:'addresses', component: AddressesComponent
  },
  {
    path:'createAddress', component: CreateAddressComponent
  },
  {
    path:'', redirectTo:'addresses', pathMatch:'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AddressRoutingModule { }
