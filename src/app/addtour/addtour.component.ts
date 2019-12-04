import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tourStructure } from '../models/tourStructure.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './addtour.component.html',
  styleUrls: ['./addtour.component.css']
})
export class AddtourComponent implements OnInit {

  @Output() addTrip: EventEmitter<tourStructure> = new EventEmitter();

  addTourForm: FormGroup

  constructor(private tourDialogRef: MatDialogRef<AddtourComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.addTourForm = new FormGroup({
      name: new FormControl("", [Validators.minLength(4), Validators.required]),
      destinationCountry: new FormControl("", Validators.required),
      startDate: new FormControl("", [Validators.required]),
      finishDate: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required, Validators.min(0)]),
      maxSeats: new FormControl("", [Validators.required, Validators.min(0)]),
      description: new FormControl(),
      imagePath: new FormControl()
    });

    this.addTourForm.controls['startDate'].setValue(new Date())
  }

  submitNewTour() {
    this.tourDialogRef.close(this.addTourForm.value)
  }

  closeDialog() {
    this.tourDialogRef.close()
  }

}
