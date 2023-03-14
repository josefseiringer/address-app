import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AddressRoutingModule } from './address-routing.module';
import { CreateAddressComponent } from './create-address/create-address.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressesComponent,
    CreateAddressComponent
  ],
  imports: [
    BrowserModule,
    AddressRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
