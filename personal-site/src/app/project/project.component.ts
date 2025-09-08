import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() projectName: string = "";
  @Input() projectLanguage: string = "";
  @Input() projectDesc: string = "";
  @Input() projectLink: string = "";
  @Input() projectImage: string = "";
  @Input() projectImageWidth: number = 0;
  @Input() projectImageHeight: number = 0;

  imageLoaded = false;

  constructor() {}


}
