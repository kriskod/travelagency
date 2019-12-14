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

  constructor(private filterDialogRef: MatDialogRef<FilterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.filterGroup = new FormGroup({
      destination: new FormControl(''),
      minDate: new FormControl(''),
      maxDate: new FormControl(''),
      minPrice: new FormControl(''),
      maxPrice: new FormControl(''),
    });
  }

  closeFilter() {
    this.filterDialogRef.close()
  }
}
