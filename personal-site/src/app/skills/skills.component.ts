import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
// TODO: animation
export class SkillsComponent implements AfterViewInit{

  allowAnimation: boolean = true;

  constructor() {}

  icons = [
    { name: 'HTML', src: 'html.svg', link: 'https://github.com/Moritz344/MangaWebApp' },
    { name: 'CSS', src: 'css.svg', link: 'https://github.com/Moritz344/MangaWebApp' },
    { name: 'Bash', src: 'bash.svg', link: 'https://github.com/Moritz344/bash-balls' },
    { name: 'Javascript', src: 'javascript.svg', link: 'https://github.com/Moritz344/dl-manga' },
    { name: 'Python',src: 'python.svg', link: 'https://github.com/Moritz344/Texteditor' },
    { name: 'Angular',src: 'angular.svg', link: 'https://github.com/Moritz344/MangaWebApp' },
    { name: 'Nodejs',src: 'nodejs.svg', link: 'https://github.com/Moritz344/mcsh' },
  ];

  @ViewChild('iconsList') iconsList!: ElementRef<HTMLDivElement>;

  private speed = 50;
  private trackWidth!: number;
  private start: number | null = null;

  ngAfterViewInit() {
      const track = this.iconsList.nativeElement;
      this.trackWidth = track.scrollWidth / 2;
      requestAnimationFrame(this.animate.bind(this));
  }



  private animate(timestamp: number) {

    if (!this.start) this.start = timestamp;
    const elapsed = timestamp - this.start;
    const distance = (elapsed / 1000) * this.speed;

    this.iconsList.nativeElement.style.transform = `translateX(-${distance % this.trackWidth}px)`;

    requestAnimationFrame(this.animate.bind(this));
  }

}
