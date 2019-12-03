import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addtour',
  templateUrl: './addtour.component.html',
  styleUrls: ['./addtour.component.css']
})
export class AddtourComponent implements OnInit {

  addTourForm: FormGroup

  constructor() { }

  ngOnInit() {
  this.addTourForm = new FormGroup({
    name: new FormControl("", [Validators.minLength(4), Validators.required]),
    destination: new FormControl("", Validators.required),
    startDate: new FormControl("", [Validators.required]),
    finishDate: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required, Validators.min(0)]),
    maxSeats: new FormControl("", [Validators.required, Validators.min(0)]),
    description: new FormControl(),
    img: new FormControl()
  });
  
  this.addTourForm.controls['startDate'].setValue(new Date())
  }


}
