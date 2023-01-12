import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RestService } from '../rest.service';
import { ModalComponent } from '../modal/modal.component';

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

      id:0,
      brand: "",
      model: "",
      year: "",
      inches: 0,
      color: "" 
  }

  constructor(private RestService:RestService, public dialog: MatDialog){
  }
  
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  columnsSchema: any = COLUMNS_SCHEMA;
  dataSource = [...ELEMENT_DATA];

  ngOnInit(): void {
    this.apiMonitors();
  }
  
  public apiMonitors() {
    this.RestService.get("/api/monitors").subscribe((respuesta:any) => {
      this.dataSource = respuesta;
  })}

  openDialog(element:any): void {
    
    this.dataUpdate.id = element.id,
    this.dataUpdate.brand = element.brand,
    this.dataUpdate.model = element.model,
    this.dataUpdate.year = element.year,
    this.dataUpdate.inches = element.inches,
    this.dataUpdate.color = element.color

    const dialogRef = this.dialog.open(ModalComponent,{
      data:{
        id: this.dataUpdate.id,
        brand: this.dataUpdate.brand,
        model: this.dataUpdate.model,
        year: this.dataUpdate.year,
        inches: this.dataUpdate.inches,
        color: this.dataUpdate.color
      }
    })
  }

  deleteMonitor(element:any){
    this.RestService.delete(element).subscribe(result =>{
      console.log(result);
      this.apiMonitors()
    })
  } 
}
