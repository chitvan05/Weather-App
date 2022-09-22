import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelInfoListingComponent } from './hotel-info-listing.component';

describe('HotelInfoListingComponent', () => {
  let component: HotelInfoListingComponent;
  let fixture: ComponentFixture<HotelInfoListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelInfoListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelInfoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
