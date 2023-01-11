import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RestService } from '../rest.service';

const COLUMNS_SCHEMA = [
  {
      key: "id",
      type: "number",
      label: "Id"
  },
  {
      key: "brand",
      type: "text",
      label: "Marca"
  },
  {
      key: "model",
      type: "text",
      label: "Modelo"
  },
  {
    key: "year",
    type: "text",
    label: "Año"
},
{
    key: "inches",
    type: "number",
    label: "Pulgadas"
},
{
  key: "color",
  type: "text",
  label: "Color"
},
  {
      key: "isEdit",
      type: "isEdit",
      label: ""
  }
];

export interface Monitors {
  id: number;
  brand: string;
  model: string;
  year: string;
  inches: number;
  color: string;
};

var ELEMENT_DATA: Monitors[] = [];


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit{

  dataUpdate:any = {

      brand: "",
      model: "",
      year: "",
      inches: 0,
      color: "" 
  }

  constructor(private RestService:RestService, public dialog: MatDialog){
  }

  ngOnInit(): void {
    this.apiMonitors();
  }
  
  public apiMonitors() {
    this.RestService.get("/api/monitors").subscribe((respuesta:any) => {
      this.dataSource = respuesta;
  })}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, element:any): void {
    this.dialog.open(UpdateModal, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    this.dataUpdate.brand = element.brand,
    this.dataUpdate.model = element.model,
    this.dataUpdate.year = element.year,
    this.dataUpdate.inches = element.inches,
    this.dataUpdate.color = element.color
    console.log(element)
  }
  

  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource = [...ELEMENT_DATA];
  columnsSchema: any = COLUMNS_SCHEMA;


  /*
  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
  */
}

@Component({
  selector: 'update-modal',
  templateUrl: './update-modal.html',
})
export class UpdateModal {
  constructor(public dialogRef: MatDialogRef<UpdateModal>) {}
}