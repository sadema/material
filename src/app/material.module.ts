// material.module.ts

import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ]
})

export class MaterialModule {}
