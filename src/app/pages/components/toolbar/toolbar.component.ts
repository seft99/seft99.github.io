import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalContactComponent } from '../modal-contact/modal-contact.component';
import { CommonModule } from '@angular/common';
import { ImportsMaterialModule } from 'src/app/shared/imports-material/imports-material/imports-material.module';
import { ThemeService } from 'src/app/shared/services/change-theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [CommonModule,ImportsMaterialModule],

})
export class ToolbarComponent {

    constructor(   private router: Router,private themeService: ThemeService,
      private activatedRoute: ActivatedRoute,){

    }

   }
