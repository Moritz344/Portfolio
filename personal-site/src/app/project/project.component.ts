import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { CommonModule } from '@angular/common';
import { Project } from '../models/project.models';
import { TiltDirective } from '../directives/tilt.directive';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [BadgeComponent, CommonModule,TiltDirective],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() data: Project[] = [];

  imageLoaded = false;

  openLink(link: string) {
    window.open(link, '_blank');
  }

  constructor() {
    console.log(this.data);
  }



}
