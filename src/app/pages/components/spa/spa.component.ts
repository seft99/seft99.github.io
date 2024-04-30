import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/routing.service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalContactComponent } from '../modal-contact/modal-contact.component';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.scss'],
})
export class SPAComponent implements OnInit {
  constructor(private scrollService: ScrollService,) {}
  state: boolean = false;
  ngOnInit() {
    window.addEventListener('scroll', () => {
      const toolbarContainer = document.getElementById('toolbarContainer');
      if (!toolbarContainer) return;

      const rect = toolbarContainer.getBoundingClientRect();
      if (rect.top <= 0) {
        toolbarContainer.classList.add('sticky');
      } else {
        toolbarContainer.classList.remove('sticky');
      }
    });
  }


  scrollToSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }

  toggleTheme(): void {
    this.state = !this.state;
    const currentTheme = document.body.classList.contains('light') ? 'dark' : 'light';
    document.body.className = currentTheme;
  }


}
