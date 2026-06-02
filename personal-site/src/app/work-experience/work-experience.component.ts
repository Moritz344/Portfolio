import { Component,signal } from '@angular/core';

interface work{
  name: string,
  position: string,
  description: string,
  date: string,
  img: string
}

@Component({
  selector: 'app-work-experience',
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  public workInfo = signal<work[]>([]);
  constructor() {
    this.initWorkInfo();
  }

  initWorkInfo() {
    const symbicomWorkInfo = [{
      name: "Symbicom AG",
      position: "IT Service",
      description: "Lorem ispum Lorem ispumLorem ispumLorem ispumLorem ispumLorem ispum",
      date: "1.08.25 - 31.07.2026",
      img: "symbicom.jpg"
    }];
    this.workInfo.set(symbicomWorkInfo);
    console.log(this.workInfo());
  }

}
