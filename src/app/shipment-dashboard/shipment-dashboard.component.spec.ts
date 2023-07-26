import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentDashboardComponent } from './shipment-dashboard.component';

describe('ShipmentDashboardComponent', () => {
  let component: ShipmentDashboardComponent;
  let fixture: ComponentFixture<ShipmentDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentDashboardComponent]
    });
    fixture = TestBed.createComponent(ShipmentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
