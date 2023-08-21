import { Component, OnInit } from '@angular/core';
import {LeaseHolderService} from "../../lease-holder.service";
import {ILeaseholder} from "../../models/ILeaseholder";

@Component({
  selector: 'app-lease-holder-list',
  templateUrl: './lease-holder-list.component.html',
  styleUrls: ['./lease-holder-list.component.scss']
})
export class LeaseHolderListComponent implements OnInit {

  allLeaseHolders!: ILeaseholder[];

  constructor(private leaseHolderService: LeaseHolderService) { }

  ngOnInit(): void {
    this.allLeaseHolders = this.leaseHolderService.getAllLeaseHolders();
  }

}
