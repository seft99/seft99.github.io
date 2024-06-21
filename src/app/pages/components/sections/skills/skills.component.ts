import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImportsMaterialModule } from 'src/app/shared/imports-material/imports-material/imports-material.module';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule, ImportsMaterialModule],
})
export class SkillsComponent {
  technologies: any = {
    Front: {
      name: 'Frontend',
      typeId: 0,
      skills: [
        {
          name: 'JavaScript',
          img: '../../../../../assets/img/logo-tools/JavaScript-logo.png',
          icon: 'data_object',
        },
        {
          name: 'TypeScript',
          img: '../../../../../assets/img/logo-tools/typescript.png',
          type: 'Languages',
          icon: 'data_object',
        },
        {
          name: 'CSS',
          img: '../../../../../assets/img/logo-tools/css.png',
          type: 'Styling And Structuring',

          icon: 'web',
        },
        {
          name: 'SASS',
          img: '../../../../../assets/img/logo-tools//sass-5.png',
          type: 'Styling And Structuring',

          icon: 'emoji_objects',
        },
        {
          name: 'HTML',
          img: '../../../../../assets/img/logo-tools/HTML5.png',
          type: 'Styling And Structuring',

          icon: 'web',
        },
        {
          name: 'Angular',
          img: '../../../../../assets/img/logo-tools/angular_logo_icon_169595.png',
          type: 'Frameworks and Libraries',

          icon: 'line_weight',
        },
        {
          name: 'Figma',
          img: '../../../../../assets/img/logo-tools/Figma-1-logo.png',
          type: 'Desing UX',

          icon: 'emoji_objects',
        },
      ],
    },

    testing: {
      name: 'Testing',
      typeId: 1,
      skills: [
        {
          name: 'Jasmine',
          img: '../../../../../assets/img/logo-tools/jasmine.png',
          type: 'Testing',
          icon: 'bug_report',
        },
        {
          name: 'Karma',
          img: '../../../../../assets/img/logo-tools/karma.png',
          type: 'Testing',
          icon: 'bug_report',
        },
      ],
    },
    learn: {
      name: 'Learning',
      typeId: 2,
      skills: [
        {
          name: 'React',
          img: '../../../../../assets/img/logo-tools/react.png',
          type: 'Frameworks and Libraries',

          icon: 'line_weight',
        },
        {
          name: 'Tailwind',
          img: '../../../../../assets/img/logo-tools/tailwind.png',
          type: 'Frameworks and Libraries',

          icon: 'line_weight',
        },
      ],
    },
    tools: {
      name: 'Tools',
      typeId: 3,
      skills: [
        {
          name: 'GitHub',
          img: '../../../../../assets/img/logo-tools/git.png',
          type: 'tools',
          icon: 'bug_report',
        },
        {
          name: 'Git',
          img: '../../../../../assets/img/logo-tools/git-.png',
          type: 'tools',
          icon: 'bug_report',
        },
        {
          name: 'Vscode',
          img: '../../../../../assets/img/logo-tools/vsCode.png',
          type: 'tools',
          icon: 'bug_report',
        },
        {
          name: 'Jira',
          img: '../../../../../assets/img/logo-tools/atlassian_jira_logo_icon_170511.png',
          type: 'tools',
          icon: 'bug_report',
        },
        {
          name: 'JSON-server',
          img: '../../../../../assets/img/logo-tools/json-server.png',
          type: 'tools',
          icon: 'bug_report',
        },
        {
          name: 'Bitbucket',
          img: '../../../../../assets/img/logo-tools/bitBucket.png',
          type: 'tools',
          icon: 'bug_report',
        },
        {
          name: 'KEYCLOAK',
          img: '../../../../../assets/img/logo-tools/Keycloak_Logo.png',
          type: 'tools',
          icon: 'bug_report',
        },
        {
          name: 'Trello',
          img: '../../../../../assets/img/logo-tools/Trello_icon-icons.com_66775.png',
          type: 'tools',
          icon: 'bug_report',
        },

      ],
    },
  };
  technologyNames = Object.keys(this.technologies);
}
