import { Component } from '@angular/core';
import { Address } from '../address';
import {v4 as uuid4} from 'uuid';



@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent {
  itemAddress : Address = {
    szUserID: uuid4(),
    mnSequence: 1,
    szFirstName: 'Michael',
    szLastName: 'Heininger',
    szStreet: 'Maria-Lassnig-Strasse',
    szStreetNumber: '36/23',
    szPostalCode: '1100',
    szCity: 'WIEN',
    szDateUpdate: new Date().toISOString()
  }
}
