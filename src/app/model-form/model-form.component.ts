import { Component, NgModule, Pipe, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// Import the DataService
import { DataService } from '../data.service';

@Component({
  selector: 'model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
// @Component({
//   selector: 'model-form',
//   templateUrl: './model-form/model-form.component.html' 
// })
export class ModelFormComponent implements OnInit {
  
  constructor(private _dataService: DataService) { }

  myform: FormGroup;
  name: FormControl;
  email: FormControl;
  subject: FormControl;
  phone: FormControl;


  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.subject = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
  }

  createForm() {
    this.myform = new FormGroup({
      name: this.name,
      email: this.email,
      subject: this.subject,
      phone: this.phone
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      // Access the Data Service's getUsers() method we defined
      this._dataService.doPOST(JSON.stringify(this.myform.value)).subscribe(
        res => this.saveSuccessfully()
      );
    }
  }

  savedSuccessfully() {

  }
}
