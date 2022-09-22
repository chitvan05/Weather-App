import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOwnerMappingComponent } from './hotel-owner-mapping.component';

describe('HotelOwnerMappingComponent', () => {
  let component: HotelOwnerMappingComponent;
  let fixture: ComponentFixture<HotelOwnerMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelOwnerMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelOwnerMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
