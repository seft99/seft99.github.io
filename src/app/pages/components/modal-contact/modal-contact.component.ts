import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ImportsMaterialModule } from 'src/app/shared/imports-material/imports-material/imports-material.module';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.scss'],
  standalone: true,
  imports: [CommonModule,ImportsMaterialModule],
})
export class ModalContactComponent {
  constructor(private dialogRef: MatDialogRef<ModalContactComponent>) {}

  closeModal(){
    this.dialogRef.close();
  }
}
