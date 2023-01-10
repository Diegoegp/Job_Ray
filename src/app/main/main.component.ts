import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

export interface Monitors {
  id: number;
  brand: string;
  model: string;
  year: string;
  inches: number;
  color: string;
}

var ELEMENT_DATA: Monitors[] = [];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor(private RestService:RestService){
  }

  ngOnInit(): void {
    this.apiMonitors();
  };

  public apiMonitors() {
    this.RestService.get("/api/monitors").subscribe((respuesta:any) => {
      this.dataSource = respuesta
  })
  
  }

  dataSource = [...ELEMENT_DATA];

}
