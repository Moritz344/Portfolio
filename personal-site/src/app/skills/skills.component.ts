import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
// TODO: animation
export class SkillsComponent implements AfterViewInit{

  allowAnimation: boolean = true;

  constructor(private device: DeviceDetectorService) {}

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

  ngAfterViewInit() {
    let result = this.checkDeviceForMobile();
    console.log(result);
      const track = this.iconsList.nativeElement;
      this.trackWidth = track.scrollWidth / 2;
      requestAnimationFrame(this.animate.bind(this));
  }

  private start: number | null = null;

  checkDeviceForMobile() {
    const isMobile = this.device.getDeviceInfo();
    console.log(isMobile);
    if (isMobile.deviceType === "mobile") {
      return false;
    }
    return true;
  }

  private animate(timestamp: number) {

    if (!this.start) this.start = timestamp;
    const elapsed = timestamp - this.start;
    const distance = (elapsed / 1000) * this.speed;

    this.iconsList.nativeElement.style.transform = `translateX(-${distance % this.trackWidth}px)`;

    requestAnimationFrame(this.animate.bind(this));
  }

}
