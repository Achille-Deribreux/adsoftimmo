import { Injectable } from '@angular/core';
import {IProperty} from "./models/property";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }

  getAllProperty() : IProperty[] {
    return [
      {
        "id": "1",
        "name": "Property 1",
      },
      {
        "id": "2",
        "name": "Property 2",
      },
      {
        "id": "3",
        "name": "Property 3",
      }
    ];
  }

}
