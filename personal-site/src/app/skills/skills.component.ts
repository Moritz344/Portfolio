import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
// TODO: animation
export class SkillsComponent implements AfterViewInit{

  constructor() {}
  icons = [
    { name: 'Html', src: 'html.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'Css', src: 'css.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Bash', src: 'bash.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Javascript', src: 'javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Python',src: 'python.svg', link: 'https://www.python.org/downloads/' },
    { name: 'Angular',src: 'angular.svg', link: 'https://angular.io/docs' },
    { name: 'Nodejs',src: 'nodejs.svg', link: 'https://nodejs.org/en/' },
  ];

  @ViewChild('iconsList') iconsList!: ElementRef<HTMLDivElement>;

  private speed = 50;
  private trackWidth!: number;

  ngAfterViewInit() {
    const track = this.iconsList.nativeElement;
    this.trackWidth = track.scrollWidth / 2;
    requestAnimationFrame(this.animate.bind(this));
  }

  private start: number | null = null;

  private animate(timestamp: number) {
    if (!this.start) this.start = timestamp;
    const elapsed = timestamp - this.start;
    const distance = (elapsed / 1000) * this.speed;

    this.iconsList.nativeElement.style.transform = `translateX(-${distance % this.trackWidth}px)`;

    requestAnimationFrame(this.animate.bind(this));
  }

}
