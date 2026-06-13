import { Component, signal,HostListener, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { ProjectComponent } from "../project/project.component";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { TopbarComponent } from "../topbar/topbar.component";
import { BadgeComponent } from "../badge/badge.component";
import { Project } from "../models/project.models";
import { BottomComponent } from '../bottom/bottom.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { NgOptimizedImage } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TiltDirective } from '../directives/tilt.directive';
import { WorkExperienceComponent } from "../work-experience/work-experience.component";
import { PictureListComponent } from "../project/picture-list/picture-list.component";

@Component({
  selector: "app-front-page",
  standalone: true,
  imports: [
    WorkExperienceComponent,
    TimelineComponent,
    ProjectComponent,
    PictureListComponent,
    AboutComponent,
    NgOptimizedImage,
    SkillsComponent,
    CommonModule,
    TopbarComponent,
    BadgeComponent,
    BottomComponent,
    TiltDirective
  ],
  templateUrl: "./front-page.component.html",
  styleUrl: "./front-page.component.css",
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', animate('600ms ease')),
    ]),
  ],
})
export class FrontPageComponent implements AfterViewInit {
  @ViewChild("frontCover") frontCover!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('projectsSection') projectsSection!: ElementRef;
  @ViewChild('work') workSection!: ElementRef;
  public isShownAbout = signal(false);
  public isShownSkills = signal(false);
  public isShownProjects = signal(false);
  public isShownWork = signal(false);
  public reveal: number = 0;

  public showProjectImages = signal(false);
  public moreProjectImages = signal<string[]>([]);

  projects: Project[] = [
    {
      name: "Anime Web App",
      lang: "Typescript",
      link: "https://github.com/Moritz344/GruvAnime",
      images: ["gruvanime_new.png","gruvanime_1.png",  "gruvanime_2.png","gruvanime_3.png"],
      desc: "Eine Website zum Durchsuchen von Mangas und Animes. Es gibt die Möglichkeit, beliebte, kommende und gerade veröffentlichte Animes und Mangas zu durchsuchen. Beim Anklicken eines Animes oder Mangas werden weitere Informationen angezeigt, wie Genres, Anzahl der Episoden, Status, Beschreibung etc. Außerdem kann über die Kalenderansicht gesehen werden, welche Animes an welchen Tagen und um wie viel Uhr erscheinen.",
      side: "right",
      width: "800px",
      height: "500px",
    },
    {
      name: "Minecraft Bot",
      lang: "Typescript",
      link: "https://github.com/Moritz344/bob-the-fisherman",
      images: ["bot_1.png","bot_2.png","bot_3.png","bot_4.png"],
      desc: "Ein Bot für das Spiel Minecraft der automatisch fisht. Für den Bot gibt es sowohl eine Desktop App als auch ein Befehlseingabetool. Es können Befehle über die App eingegeben werden,die gesammelten Gegenständen in einer Tabelle eingesehen werden und Bot Einstellungen angepasst werden.",
      side: "left",
      width: "800px",
      height: "500px",
    },
    {
      name: "Spiel Info Website",
      lang: "Typescript",
      link: "https://github.com/Moritz344/raid-log",
      images: ["arc_raiders.jpg","arc_2.png","arc_3.png","arc_4.png","arc_5.png"],
      desc: "Eine Info Website über das Spiel Arc Raiders. Es gibt die Möglichkeit, nach Gegenständen aus dem Spiel, nach Quests, nach Gegnern (Arcs) und nach Händlern zu suchen.",
      side: "right",
      width: "800px",
      height: "500px",
    },
    {
      name: "Twitch Client",
      lang: "Typescript",
      link: "https://github.com/Moritz344/lurker",
      images: ["twitch_client.png","twitch_client_2.png"],
      desc: "Ein Chat Client für twitch.tv. Die App ermöglicht es, den Chat eines Twitch Kanals in Echtzeit zu verfolgen. Dabei werden User Badges, individuelle Chat Farben und Twitch Emojis angezeigt. Durch das Anklicken eines Users kann dessen User Card geöffnet werden, in der weitere Informationen sowie die neuesten Nachrichten des Users,das Profilbild und die Profil Beschreibung angezeigt wird.",
      side: "left",
      width: "700px",
      height: "600px",
    },
  ];


  constructor() {}


  ngAfterViewInit() {

    let isInitial = true;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isInitial) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id == "about") {
              this.isShownAbout.set(true);
            } else if (entry.target.id == "skills") {
              this.isShownSkills.set(true);
            } else if (entry.target.id == "projekte") {
              this.isShownProjects.set(true);
            } else if (entry.target.id == "work") {
              this.isShownWork.set(true);
            }

          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(this.aboutSection.nativeElement);
    observer.observe(this.skillsSection.nativeElement);
    observer.observe(this.workSection.nativeElement);
    observer.observe(this.projectsSection.nativeElement);

    setTimeout(() => { isInitial = false; });
  }

  onCloseProjectImages() {
    this.moreProjectImages.set([]);
    this.showProjectImages.set(false);
  }
  onShowProjectImages(images: string[]) {
    this.moreProjectImages.set(images);
    this.showProjectImages.set(true);
  }
}
