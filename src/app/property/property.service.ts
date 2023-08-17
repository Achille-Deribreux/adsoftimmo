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
        "rent": 1000
      },
      {
        "id": "2",
        "name": "Property 2",
        "rent": 2000
      },
      {
        "id": "3",
        "name": "Property 3",
        "rent": 3000
      }
    ];
  }

  getPropertyById(id: string): IProperty {
    //TODO Achille improve this
    const property = this.getAllProperty().find(property => property.id === id);
    if (!property) {
      throw new Error(`Propriété avec l'ID ${id} non trouvée.`);
    }
    return property;
  }

}
