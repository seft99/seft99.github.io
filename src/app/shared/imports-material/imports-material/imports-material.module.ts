import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from 'src/app/pages/components/toolbar/toolbar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatDialogModule],
  exports: [CommonModule, MatIconModule, MatDialogModule],
})
export class ImportsMaterialModule {}
