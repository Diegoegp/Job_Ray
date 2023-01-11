import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [RestService]
})

export class FormComponent implements OnInit{

  ngOnInit(): void {
    this.profileForm.reset();
  }

  constructor(private RestService:RestService){
  }

  profileForm = new FormGroup({
    brand:  new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
    inches: new FormControl(0, [Validators.required, Validators.pattern('[0-9 ]*')]),
    color: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.RestService.post(this.profileForm.value).subscribe(result =>{
      console.log(result);
    })
  }
}