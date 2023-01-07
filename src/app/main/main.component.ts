import { Component } from '@angular/core';
import { Monitor } from '../models/monitor'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  monitorsArray: Monitor[] = [
    { id: 5,
      brand: "Alcatel",
      model: "spc14",
      year: "2021",
      inches: 14,
      color: "verde"
    },
    { id: 6,
      brand: "Sony",
      model: "rm15",
      year: "2022",
      inches: 18,
      color: "azul"
    },
    { id: 7,
      brand: "Lg",
      model: "LG57",
      year: "2022",
      inches: 24,
      color: "negro"
    },
    { id: 8,
      brand: "Alcatel",
      model: "spc14",
      year: "2021",
      inches: 14,
      color: "verde"
    },
    { id: 9,
      brand: "Sony",
      model: "rm15",
      year: "2022",
      inches: 18,
      color: "azul"
    },
    { id: 10,
      brand: "Lg",
      model: "LG57",
      year: "2022",
      inches: 24,
      color: "negro"
    }
  ];
}
