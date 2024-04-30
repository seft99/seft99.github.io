import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImportsMaterialModule } from 'src/app/shared/imports-material/imports-material/imports-material.module';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports:[CommonModule,ImportsMaterialModule]
})
export class ProjectsComponent {

  projects: any[] = [
    {
      name: 'Phoenix Game',
      img: '../../../../../assets/img/projects/logo-Phoenix.jpeg',
      description:
        'Phoenix Game es una plataforma de videojuegos que ofrece una amplia biblioteca de juegos para entusiastas y jugadores ávidos. Con una interfaz intuitiva y atractiva, los usuarios pueden explorar una variedad de juegos, cada uno con su propia página de detalles que incluye imágenes, descripciones detalladas, calificaciones de usuarios, comentarios y más.',
      herramientas:[
        '../../../../../assets/img/logo-tools/JavaScript-logo.png',
        '../../../../../assets/img/logo-tools/angular_logo_icon_169595.png',
        '../../../../../assets/img/logo-tools/Figma-1-logo.png',
      ]
      },
      {
        name: 'SF Bank App',
        img: '../../../../../assets/img/projects/SFBANK.jpeg',
        description:
          'La aplicación SF Bank es una plataforma digital que ofrece información y servicios bancarios a sus clientes. Con un diseño intuitivo y fácil de usar, los usuarios pueden acceder a información sobre los productos y servicios ofrecidos por SF Bank, así como a herramientas útiles para gestionar sus finanzas de manera efectiva.',
        herramientas:[
          '../../../../../assets/img/logo-tools/JavaScript-logo.png',
          '../../../../../assets/img/logo-tools/angular_logo_icon_169595.png',
          '../../../../../assets/img/logo-tools/Figma-1-logo.png',
        ]
        },
        {
          name: 'SF Bank App',
          img: '../../../../../assets/img/projects/SFBANK.jpeg',
          description:
            'La aplicación SF Bank es una plataforma digital que ofrece información y servicios bancarios a sus clientes. Con un diseño intuitivo y fácil de usar, los usuarios pueden acceder a información sobre los productos y servicios ofrecidos por SF Bank, así como a herramientas útiles para gestionar sus finanzas de manera efectiva.',
          herramientas:[
            '../../../../../assets/img/logo-tools/JavaScript-logo.png',
            '../../../../../assets/img/logo-tools/angular_logo_icon_169595.png',
            '../../../../../assets/img/logo-tools/Figma-1-logo.png',
          ]
          },
  ];
}
