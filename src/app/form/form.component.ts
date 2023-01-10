import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [RestService]
})

export class FormComponent {

  constructor(private RestService:RestService){
  }

  profileForm = new FormGroup({
    brand:  new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
    inches: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]*')]),
    color: new FormControl('', [Validators.required]),
  });

  onSubmit() {

    const dataMonitors = {
      brand: this.profileForm.value.brand,
      model: this.profileForm.value.model,
      year: this.profileForm.value.year,
      inches: this.profileForm.value.inches,
      color: this.profileForm.value.color,
    };
    console.log(dataMonitors);
    this.RestService.post(dataMonitors).subscribe(result =>{
      console.log(result);
    })
  }
}
