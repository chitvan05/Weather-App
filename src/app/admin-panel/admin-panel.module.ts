import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddHotelOwnerComponent } from './add-hotel-owner/add-hotel-owner.component';
import { HotelListingComponent } from './hotel-listing/hotel-listing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCityComponent } from './add-city/add-city.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddHotelInfoComponent } from './add-hotel-info/add-hotel-info.component';
import { HotelInfoListingComponent } from './hotel-info-listing/hotel-info-listing.component';
import { HotelOwnerMappingComponent } from './hotel-owner-mapping/hotel-owner-mapping.component';


@NgModule({
  declarations: [
    AdminLoginComponent,
    AddHotelComponent,
    AddHotelOwnerComponent,
    HotelListingComponent,
    AddCityComponent,
    AddHotelInfoComponent,
    HotelInfoListingComponent,
    HotelOwnerMappingComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class AdminPanelModule { }
