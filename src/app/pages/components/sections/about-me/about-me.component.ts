import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImportsMaterialModule } from 'src/app/shared/imports-material/imports-material/imports-material.module';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  standalone: true,
  imports:[CommonModule,ImportsMaterialModule],
})
export class AboutMeComponent {
  descargarPDF() {
    const url = '../../../../../assets/document/CV - Sebastian Fuentes Torres..pdf';
    const nombreArchivo = 'Curriculum.pdf';
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = nombreArchivo;
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  }
}
