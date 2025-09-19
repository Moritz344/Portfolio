import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
// TODO: animation
export class SkillsComponent {

  allowAnimation: boolean = true;


  icons = [
    { name: 'Javascript', src: 'javascript.svg', link: 'https://github.com/Moritz344/dl-manga' },
    { name: 'Python',src: 'python.svg', link: 'https://github.com/Moritz344/Texteditor' },
    { name: 'Angular',src: 'angular.svg', link: 'https://github.com/Moritz344/MangaWebApp' },
  ];

}
