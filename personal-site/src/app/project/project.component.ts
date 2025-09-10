import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { CommonModule } from '@angular/common';
import { Project } from '../models/project.models';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [BadgeComponent,CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() data: Project[] = [] ;

  imageLoaded = false;

  constructor() {
  }



}
