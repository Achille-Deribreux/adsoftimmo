import {Component, OnInit} from '@angular/core';
import {PropertyService} from "../../property.service";
import {IProperty} from "../../models/property";

@Component({
  selector: 'app-components',
  templateUrl: './property-list.component.html'
})
export class PropertyListComponent implements OnInit {
  fullPropertyList: IProperty[] = [];


  constructor(private propertyService: PropertyService) {
  }

  ngOnInit(): void {
    this.fullPropertyList = this.propertyService.getAllProperty();
  }
}
