import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() projectName: string = "";
  @Input() projectDesc: string = "";
  @Input() projectLink: string = "";
  @Input() projectImage: string = "";
  @Input() projectImageWidth: number = 0;
  @Input() projectImageHeight: number = 0;

  imageLoaded = false;

  constructor() {}


}
