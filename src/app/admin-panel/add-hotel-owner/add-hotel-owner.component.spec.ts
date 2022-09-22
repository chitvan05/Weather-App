import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHotelOwnerComponent } from './add-hotel-owner.component';

describe('AddHotelOwnerComponent', () => {
  let component: AddHotelOwnerComponent;
  let fixture: ComponentFixture<AddHotelOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHotelOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHotelOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
