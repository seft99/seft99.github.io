import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImportsMaterialModule } from 'src/app/shared/imports-material/imports-material/imports-material.module';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true,
  imports:[CommonModule,ImportsMaterialModule],
})
export class ExperienceComponent {


  experiences = [
    {
      orgName:'ZABUD technologies',
      orgLogo:'https://media.licdn.com/dms/image/C560BAQFcXdXUkiiZfg/company-logo_200_200/0/1630668329814/zabudtechnologies_logo?e=2147483647&v=beta&t=Ogx7I1SEG3UgZRHW9Y-x6p177ujf53gEIYLVoyAb4VE',
      totalDuration:'1 year and 3 months',
      experiences : [
      {
        cargo:'Junior Front-end Developer',
        fechaInicioFin:'07 feb 2023 - present',
        duration:'1 year and 5 months',
        place:'Colombia',
      }

    ]



    }
  ]
}
