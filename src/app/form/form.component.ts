import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  profileForm = new FormGroup({
    brand: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]*'), Validators.minLength(4), Validators.maxLength(4)]),
    inches: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]*')]),
    color: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
  });
  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
  this.profileForm.reset();
  }
}
