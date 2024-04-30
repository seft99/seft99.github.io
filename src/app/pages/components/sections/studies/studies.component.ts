import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImportsMaterialModule } from 'src/app/shared/imports-material/imports-material/imports-material.module';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss'],
  standalone: true,
  imports: [CommonModule, ImportsMaterialModule],
})
export class StudiesComponent    {

  studies = {
    title: 'Academic Training',
    achievements: [
      'Graduated from school in 2018',
      'Software development technologist in 2022',
      'Systems Engineer in 2024'
    ]
  }
}
