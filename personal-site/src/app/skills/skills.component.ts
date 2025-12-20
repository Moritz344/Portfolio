import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  javascriptProjects: string[] = ["https://github.com/Moritz344/dl-manga", "https://github.com/Moritz344/JTChat", "https://github.com/Moritz344/foggy.js", "https://github.com/Moritz344/mcsh", "https://github.com/Moritz344/PokeType", "https://github.com/Moritz344/osu-cli"]
  pythonProjects: string[] = ["https://github.com/Moritz344/Simulation-of-Life", "https://github.com/Moritz344/Texteditor", "https://github.com/Moritz344/mcscan-gui", "https://github.com/Moritz344/Meteor-Game", "https://github.com/Moritz344/Discord-Bot"]
  angularProjects: string[] = ["https://github.com/Moritz344/Gravel", "https://github.com/Moritz344/lurker", "https://github.com/Moritz344/Coal", "https://github.com/Moritz344/GruvManga", "https://github.com/Moritz344/Raid-Log",]

  icons = [
    { name: 'Javascript', src: 'javascript.svg', link: 'https://github.com/Moritz344/dl-manga' },
    { name: 'Python', src: 'python.svg', link: 'https://github.com/Moritz344/Texteditor' },
    { name: 'Angular', src: 'angular.svg', link: 'https://github.com/Moritz344/MangaWebApp' },
  ];

  chooseRandom(lang: string) {
    if (lang === "javascript.svg") {
      let randomProject = this.javascriptProjects[Math.floor(Math.random() * this.javascriptProjects.length)];
      this.icons[0].link = randomProject;
    } else if (lang === "python.svg") {
      let randomProject = this.pythonProjects[Math.floor(Math.random() * this.pythonProjects.length)];
      this.icons[1].link = randomProject;
    } else {
      let randomProject = this.angularProjects[Math.floor(Math.random() * this.angularProjects.length)];
      this.icons[2].link = randomProject;

    }
  }

}
