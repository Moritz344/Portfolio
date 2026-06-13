import { Component, Input,OnInit,ViewChild,ElementRef,signal, EventEmitter,Output } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { CommonModule } from '@angular/common';
import { Project } from '../models/project.models';
import { TiltDirective } from '../directives/tilt.directive';
import { PictureListComponent } from './picture-list/picture-list.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [BadgeComponent, CommonModule,TiltDirective,PictureListComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  @ViewChild("projectImg") projectImg!: ElementRef;
  @Input() data: Project[] = [];
  @Output() showPictures = new EventEmitter<string[]>();

  public imageLoaded = false;

  openLink(link: string) {
    window.open(link, '_blank');
  }

  constructor() {
  }

  onOpenPictureList(images: string[]) {
    this.showPictures.emit(images);
  }


  ngOnInit(): void {
  }

}
