import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() filter = new EventEmitter<any>()

  filterGroup: FormGroup

  constructor() { }

  ngOnInit() {
    this.filterGroup = new FormGroup({
      destination: new FormControl(''),
      minDate: new FormControl(''),
      maxDate: new FormControl(''),
      minPrice: new FormControl(''),
      maxPrice: new FormControl(''),
    });
  }
  submit() {
    this.filter.emit(this.filterGroup.value.destination)
  }
}
