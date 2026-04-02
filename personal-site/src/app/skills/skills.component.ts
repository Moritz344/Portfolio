import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  icons = [
    { name: 'Javascript', src: 'javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Typescript', src: 'typescript.png', link: 'https://www.typescriptlang.org/' },
    { name: 'Python', src: 'python.svg', link: 'https://www.python.org/' },
    { name: 'php', src: 'php.png', link: 'https://www.php.net/' },
    { name: 'SQL', src: 'sql.png', link: 'https://www.w3schools.com/sql/' },
    { name: 'Angular', src: 'angular.svg', link: 'https://angular.dev' },
    { name: 'HTML', src: 'html.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', src: 'css.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Docker', src: 'docker.png', link: 'https://www.docker.com/' },
    { name: 'Git', src: 'git.svg', link: 'https://git-scm.com/' },
    { name: 'Bun', src: 'bun.png', link: 'https://bun.sh/' },
    { name: 'Node.js', src: 'nodejs.svg', link: 'https://nodejs.org/en/' },
  ];


}
