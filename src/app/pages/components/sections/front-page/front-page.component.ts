import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContactComponent } from '../../modal-contact/modal-contact.component';
import { CommonModule } from '@angular/common';
import { ImportsMaterialModule } from 'src/app/shared/imports-material/imports-material/imports-material.module';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
  standalone: true,
  imports: [CommonModule, ImportsMaterialModule],
})
export class FrontPageComponent {
  constructor(private dialog: MatDialog) {}
  openModalContact() {
    this.dialog.open(ModalContactComponent);
  }
}
