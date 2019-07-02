import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DialogSubscriptionData} from "../../content/agenda/agenda.component";

@Component({
  selector: 'app-inschrijving',
  templateUrl: './inschrijving.component.html',
  styleUrls: ['./inschrijving.component.css']
})
export class InschrijvingComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InschrijvingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogSubscriptionData
  ) { }

  ngOnInit() {
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
