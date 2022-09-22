import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCityComponent } from './add-city/add-city.component';
import { AddHotelInfoComponent } from './add-hotel-info/add-hotel-info.component';
import { AddHotelOwnerComponent } from './add-hotel-owner/add-hotel-owner.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HotelInfoListingComponent } from './hotel-info-listing/hotel-info-listing.component';
import { HotelListingComponent } from './hotel-listing/hotel-listing.component';
import { HotelOwnerMappingComponent } from './hotel-owner-mapping/hotel-owner-mapping.component';

const routes: Routes = [
  {path:'login', component:AdminLoginComponent},
  {path:'hotelListing', component:HotelListingComponent},
  {path:'addHotelOwner', component:AddHotelOwnerComponent},
  {path:'addHotel', component:AddHotelComponent},
  {path:'city', component:AddCityComponent},
  {path:'hotelInfo', component:AddHotelInfoComponent},
  {path:'hotelInfoList', component:HotelInfoListingComponent},
  {path:'hotelMapping', component:HotelOwnerMappingComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
