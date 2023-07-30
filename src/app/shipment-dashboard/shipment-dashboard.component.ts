import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShipmentModel } from '../shipment-dashboard/shipment-dashboard.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-shipment-dashboard',
  templateUrl: './shipment-dashboard.component.html',
  styleUrls: ['./shipment-dashboard.component.css']
})
export class ShipmentDashboardComponent {

  formValue !: FormGroup;
  //object of the shipment model to be sent to json server
  shipmentModelObj : ShipmentModel = new ShipmentModel();
  shipmentData !: any;

  showAdd !: boolean;
  showUpdate !: boolean;

  api: any;

  constructor(private formbuilder: FormBuilder){ }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      packageId : [''],
      courier : [''],
      weight : [''],
      destination : [''],
      estDelivary : [''],
      packStatus : ['']
    })
    this.getAllShipments();
  }

  clickAddShipment(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  

  postShipmentDetails(){
    //appending values from form to object to be sent
    this.shipmentModelObj.packageId = this.formValue.value.packageId;
    this.shipmentModelObj.courier = this.formValue.value.courier;
    this.shipmentModelObj.weight = this.formValue.value.weight;
    this.shipmentModelObj.destination = this.formValue.value.destination;
    this.shipmentModelObj.estDelivary = this.formValue.value.estDelivary;
    this.shipmentModelObj.packStatus = this.formValue.value.packStatus;

    this.api.postShipment(this.shipmentModelObj)
    .subscribe((res: any)=>{
      console.log(res);
      alert("Shipment Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllShipments();
    }, 
      (err: any)=>{
      alert("Something Went Wrong");
    })
  }

  getAllShipments(){
    this.api.getShipment()
    .subscribe((res: any)=>{
      this.shipmentData = res;
    })
  }

  deleteShipment(row : any){
    this.api.deleteShipment(row.packageId)
    .subscribe((res: any)=>{
      alert("Shipment Deleted")
      this.getAllShipments();
    })
  }

  onEdit(row : any){

    this.showAdd = false;
    this.showUpdate = true;

    this.shipmentModelObj.packageId = row.packageId;
    this.formValue.controls['packageId'].setValue(row.packageId)
    this.formValue.controls['courier'].setValue(row.courier)
    this.formValue.controls['weight'].setValue(row.weight)
    this.formValue.controls['destination'].setValue(row.destination)
    this.formValue.controls['estDelivary'].setValue(row.estDelivary)
    this.formValue.controls['packStatus'].setValue(row.packStatus)

  }

  updateShipmentDetails(){
    this.shipmentModelObj.packageId = this.formValue.value.packageId;
    this.shipmentModelObj.courier = this.formValue.value.courier;
    this.shipmentModelObj.weight = this.formValue.value.weight;
    this.shipmentModelObj.destination = this.formValue.value.destination;
    this.shipmentModelObj.estDelivary = this.formValue.value.estDelivary;
    this.shipmentModelObj.packStatus = this.formValue.value.packStatus;

    this.api.updateShipment(this.shipmentModelObj, this.shipmentModelObj.packageId)
    .subscribe((res: any)=>{
      alert("Updated Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllShipments();
    })
  }
  

}
