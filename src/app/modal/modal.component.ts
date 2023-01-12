import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { EditComponent } from '../edit/edit.component';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(public dialogRef: MatDialogRef<ModalComponent>, private RestService:RestService, @Inject(MAT_DIALOG_DATA) public data: { id:number, brand:string, model:string, year:string, inches:number, color:string }) {}

  profileFormModal = new FormGroup({
    id:  new FormControl(0, [Validators.required]),
    brand:  new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
    inches: new FormControl(0, [Validators.required, Validators.pattern('[0-9 ]*')]),
    color: new FormControl('', [Validators.required])

  })

  onSubmit() {
    this.RestService.update(this.profileFormModal.value).subscribe(result =>{
      console.log(result);
    })
    this.dialogRef.close();
    window.location.reload();
  }

  OnClickNo(){
    this.dialogRef.close();
  }
}
