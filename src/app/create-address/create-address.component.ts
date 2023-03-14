import { Component } from '@angular/core';
import {v4 as uuid4} from 'uuid';
import { Address } from '../address';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css']
})
export class CreateAddressComponent {

  address: Address = {
    szUserID: uuid4(),
    mnSequence: 1,
    szFirstName: 'John',
    szLastName: 'Dow',
    szStreet: 'Your Street',
    szStreetNumber: '11a',
    szPostalCode: 'CA45588',
    szCity: 'California',
    szDateUpdate: new Date().toISOString()
  }

}
