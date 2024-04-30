import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImportsMaterialModule } from 'src/app/shared/imports-material/imports-material/imports-material.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports:[CommonModule, ImportsMaterialModule]
})
export class FooterComponent {

}
