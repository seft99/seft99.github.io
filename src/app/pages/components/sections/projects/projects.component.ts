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
        'Phoenix Game is a gaming platform that offers a vast library of games for enthusiasts and avid gamers. With an intuitive and attractive interface, users can explore a variety of games, each with its own details page that includes images, detailed descriptions, user ratings, comments and more.',
      herramientas:[
        '../../../../../assets/img/logo-tools/JavaScript-logo.png',
        '../../../../../assets/img/logo-tools/angular_logo_icon_169595.png',
        '../../../../../assets/img/logo-tools/Figma-1-logo.png',
        '../../../../../assets/img/logo-tools/jasmine.png',
      ],
      url:'https://github.com/seft99/videoGames-Proyect',
      },
      {
        name: 'SF Bank App',
        img: '../../../../../assets/img/projects/SFBANK.jpeg',
        description:
          'SF Bank App is a digital platform that offers banking information and services to its customers. With an intuitive and easy-to-use design, users can access information about the products and services offered by SF Bank, as well as useful tools to manage their finances effectively.',
        herramientas:[
          '../../../../../assets/img/logo-tools/JavaScript-logo.png',
          '../../../../../assets/img/logo-tools/angular_logo_icon_169595.png',
          '../../../../../assets/img/logo-tools/Figma-1-logo.png',
        ],
        url:'https://github.com/seft99/JSbank',
        },
        {
          name: 'LifeBeat',
          img: '../../../../../assets/img/projects/lifeBeat.jpeg',
          description:
            'The Life Beat web application was developed based on the functionalities of the software platform for machine learning and data mining Weka, using the J48 classification algorithm. This algorithm is based on decision trees, so it is very efficient in the prediction processes that want to reach a final decision. Life Beat is an application developed in the Java programming language, using the libraries provided by Weka to read, add and display data based on a given dataset (Heart Clean).',
          herramientas:[
            '../../../../../assets/img/logo-tools/JavaScript-logo.png',
            '../../../../../assets/img/logo-tools/angular_logo_icon_169595.png',
            '../../../../../assets/img/logo-tools/Figma-1-logo.png',

          ],
          url:'https://github.com/seft99/LifeBeat',
          },
          {
            name: 'Aldea',
            img: '../../../../../assets/img/projects/Aldea.jpeg',
            description:
              'I have been working for more than 1 and a half years at the company Zabud Technologies SAS on the village project which allows its users to organize, execute, control and analyze their strategies more efficiently. Maximizing the potential of your business and make informed decisions with our state-of-the-art tool.',
            herramientas:[
              '../../../../../assets/img/logo-tools/JavaScript-logo.png',
              '../../../../../assets/img/logo-tools/angular_logo_icon_169595.png',
              '../../../../../assets/img/logo-tools//sass-5.png',
              '../../../../../assets/img/logo-tools/jasmine.png',
              '../../../../../assets/img/logo-tools/karma.png',
            ],
            url:'https://www.zabud.com.co/',
            },
  ];
}
