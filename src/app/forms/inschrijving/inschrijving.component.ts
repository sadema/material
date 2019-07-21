import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DialogSubscriptionData} from "../../content/agenda/agenda.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "../MyErrorStateMatcher";

@Component({
  selector: 'app-inschrijving',
  templateUrl: './inschrijving.component.html',
  styleUrls: ['./inschrijving.component.css']
})
export class InschrijvingComponent implements OnInit {

  inschrijving = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    activity: new FormControl(null),
    note: new FormControl('')
  });

  matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<InschrijvingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogSubscriptionData
  ) {

  }

  ngOnInit() {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.inschrijving.value);
  }

}
