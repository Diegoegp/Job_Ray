import {Component, ViewChild, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import {MatTable} from '@angular/material/table';


export interface Monitors {
  id: number;
  brand: string;
  model: string;
  year: string;
  inches: number;
  color: string;
}
var ELEMENT_DATA: Monitors[] = [];

/*
  @title 
 */

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit{

  constructor(private RestService:RestService){
  }

  ngOnInit(): void {
    this.apiMonitors();
    this.prueba();
  }
  
  public apiMonitors() {
    this.RestService.get("https://localhost:44381/api/monitors").subscribe((respuesta:any) => {
      return respuesta;
  })
  
  }

  public prueba(){
    return console.log(ELEMENT_DATA);
  }

  displayedColumns: string[] = ['Id', 'Marca', 'Modelo', 'Año', 'Pulgadas', 'Color'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<Monitors>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
