import { Component, signal, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { ProjectComponent } from "../project/project.component";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { TopbarComponent } from "../topbar/topbar.component";
import { BadgeComponent } from "../badge/badge.component";
import { Project } from "../models/project.models";
import { BottomComponent } from '../bottom/bottom.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { AsciiAnimationComponent } from '../ascii-animation/ascii-animation.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { WaveBackgroundComponent } from '../wave-background/wave-background.component';

// TODO: omarchy like screensaver for the front page

@Component({
  selector: "app-front-page",
  standalone: true,
  imports: [
    WaveBackgroundComponent,
    TimelineComponent,
    ProjectComponent,
    AsciiAnimationComponent,
    AboutComponent,
    SkillsComponent,
    CommonModule,
    TopbarComponent,
    BadgeComponent,
    BottomComponent
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
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('projectsSection') projectsSection!: ElementRef;
  public isShownAbout = signal(false);
  public isShownSkills = signal(false);
  public isShownProjects = signal(false);

  projects: Project[] = [
    {
      name: "Anime Web App",
      lang: "Typescript",
      link: "https://github.com/Moritz344/GruvAnime",
      img: "gruvanime.png",
      desc: "Eine Website zum Durchsuchen von Mangas und Animes. Es gibt die Möglichkeit, beliebte, kommende und gerade veröffentlichte Animes und Mangas zu durchsuchen. Beim Anklicken eines Animes oder Mangas werden weitere Informationen angezeigt, wie Genres, Anzahl der Episoden, Status, Beschreibung etc. Außerdem kann über die Kalenderansicht gesehen werden, welche Animes an welchen Tagen und um wie viel Uhr erscheinen.",
      side: "right",
    },

    {
      name: "Texteditor",
      lang: "Python",
      link: "https://github.com/Moritz344/Texteditor",
      img: "texteditor.png",
      desc: "Ein einfach gehaltener Texteditor für Notizen oder zum Schreiben von Python Code.",
      side: "left",
    },
    {
      name: "Spiel Info Website",
      lang: "Typescript",
      link: "https://github.com/Moritz344/raid-log",
      img: "arc_raiders.jpg",
      desc: "Eine Info Website über das Spiel Arc Raiders. Es gibt die Möglichkeit, nach Gegenständen aus dem Spiel, nach Quests, nach Gegnern (Arcs) und nach Händlern zu suchen.",
      side: "right",
    },
    {
      name: "Twitch Client",
      lang: "Typescript",
      link: "https://github.com/Moritz344/lurker",
      img: "lurker_new.png",
      desc: "Ein Chat Client für twitch.tv. Die App ermöglicht es, den Chat eines Twitch Kanals in Echtzeit zu verfolgen. Dabei werden User Badges, individuelle Chat Farben und Twitch Emojis angezeigt. Durch das Anklicken eines Users kann dessen User Card geöffnet werden, in der weitere Informationen sowie die neuesten Nachrichten des Users,das Profilbild und die Profil Beschreibung angezeigt wird.",
      side: "left",
    },
  ];


  links = [
    {
      name: "Github",
      link: "https://github.com/Moritz344",
      desc: "Mein Github.",
      img: "",
    },

    {
      name: "Youtube",
      link: "https://www.youtube.com/@pennti",
      desc: "Mein Youtube.",
      img: "",
      ImgWidth: 0,
      ImgHeight: 0,
    },

    {
      name: "X",
      link: "https://x.com/iuseosu",
      desc: "Mein X.",
      img: "",
      ImgWidth: 0,
      ImgHeight: 0,
    },
  ];

  constructor() { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id == "about") {
              this.isShownAbout.update((about) => true);
            } else if (entry.target.id == "skills") {
              this.isShownSkills.update((skills) => true);
            } else if (entry.target.id == "projekte") {
              this.isShownProjects.update((projects) => true)

            }

          }
          console.log(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(this.aboutSection.nativeElement);
    observer.observe(this.skillsSection.nativeElement);
    observer.observe(this.projectsSection.nativeElement);
  }
}
