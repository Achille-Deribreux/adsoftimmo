import {Injectable} from '@angular/core';
import {ILeaseholder} from "./models/ILeaseholder";

@Injectable({
  providedIn: 'root'
})
export class LeaseHolderService {

  constructor() {
  }

  getLeaseHolderById(id: string): ILeaseholder {
    return {
      id: '1',
      name: 'Müller',
      firstname: 'Hans',
      address: 'Hauptstrasse 1, 12345 Musterstadt',
      email: 'hansmuller@gmail.com',
      phone: '0123 456789',
      since: '01.01.2019',
      until: '31.12.2019',
      active: true
    };
  }

  getAllLeaseHolders(): ILeaseholder [] {
    return [
      {
        id: '1',
        name: 'Müller',
        firstname: 'Hans',
        address: 'Hauptstrasse 1, 12345 Musterstadt',
        email: 'hansmuller@gmail.com',
        phone: '0123 456789',
        since: '01.01.2019',
        until: '31.12.2019',
        active: true
      },
      {
        id: '2',
        name: 'Schmidt',
        firstname: 'Peter',
        address: 'Hauptstrasse 2, 12345 Musterstadt',
        email: 'schmidpeter@gmail.com',
        phone: '0123 456789',
        since: '01.01.2019',
        until: '31.12.2019',
        active: false
      },
      {
        id: '3',
        name: 'John',
        firstname: 'Doe',
        address: 'langestraat 2, 12345 Musterstadt',
        email: 'johndoe@gmail.com',
        phone: '0123 456789',
        since: '01.01.2019',
        until: '31.12.2019',
        active: true
      },
      {
        id: '4',
        name: 'Jane',
        firstname: 'Doe',
        address: 'langestraat 2, 12345 Musterstadt',
        email: 'jane@gmail.com',
        phone: '0123 456789',
        since: '01.01.2019',
        until: '31.12.2019',
        active: false
      }
    ]
  }

  getLeaseHoldersForProperty(propertyId: string): ILeaseholder [] {
    return [
      {
        id: '1',
        name: 'Müller',
        firstname: 'Hans',
        address: 'Hauptstrasse 1, 12345 Musterstadt',
        email: 'hansmuller@gmail.com',
        phone: '0123 456789',
        since: '01.01.2019',
        until: '31.12.2019',
        active: true
      },
      {
        id: '2',
        name: 'Schmidt',
        firstname: 'Peter',
        address: 'Hauptstrasse 2, 12345 Musterstadt',
        email: 'schmidpeter@gmail.com',
        phone: '0123 456789',
        since: '01.01.2019',
        until: '31.12.2019',
        active: false
      }
    ];
  }
}
