import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerViewRoutingModule } from './customer-view-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BaseRoutingModule } from '../views/base/base-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    HotelDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerViewRoutingModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    AutocompleteLibModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class CustomerViewModule { }
