import { Injectable } from '@angular/core';
import {IRent} from "./models/IRent";

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor() { }

  getRentsForProperty(propertyId: string,
                      dateFrom: string,
                      dateTo: string) : IRent[] {
    return [
      {
        id: '1',
        propertyId: '1',
        leaseHolderId: '123',
        rent: 1200,
        month: 'January',
        date: '2023-01-01'
      },
    ];
  }
}
