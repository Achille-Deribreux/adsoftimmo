import { Component, OnInit } from '@angular/core';
import {IProperty} from "../../models/property";
import {PropertyService} from "../../property.service";
import {IRent} from "../../../rent/models/IRent";
import {RentService} from "../../../rent/rent.service";
import {LeaseHolderService} from "../../../leaseholder/lease-holder.service";
import {ILeaseholder} from "../../../leaseholder/models/ILeaseholder";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  property!: IProperty;
  rents!: IRent[];
  leaseholders!: ILeaseholder[];

  constructor(private propertyService: PropertyService,
              private rentService: RentService,
              private rentHolderService: LeaseHolderService) {
  }

  ngOnInit(): void {
    //TODO set real data
    this.property = this.propertyService.getPropertyById("1");
    this.rents = this.rentService.getRentsForProperty("1", "2021-01-01", "2021-12-31");
    this.leaseholders = this.rentHolderService.getLeaseHoldersForProperty("1");
  }

}
