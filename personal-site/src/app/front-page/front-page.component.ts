import { Component } from "@angular/core";
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

@Component({
  selector: "app-front-page",
  standalone: true,
  imports: [
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
})
export class FrontPageComponent {
  projects: Project[] = [
    {
      name: "Anime Web App",
      lang: "Typescript",
      link: "https://github.com/Moritz344/GruvAnime",
      img: "gruvanime.png",
      desc: "Eine Website zum Durchsuchen von Mangas und Animes. Es gibt die möglichkeit Beliebte,kommende und gerade veröffentlichte Animes und Mangas zu durchsuchen. Beim anklicken eines Animes/Manga werden weitere informationen angezeigt wie Genres,Anzahl Episoden,Status,Beschreibung etc. Außerdem kann über die Kalendar Ansicht gesehen werden welche Anime an welchen Tagen und um wie viel Uhr erscheinen.",
      side: "right",
    },

    {
      name: "Texteditor",
      lang: "Python",
      link: "https://github.com/Moritz344/Texteditor",
      img: "texteditor.png",
      desc: "Ein einfach gehaltener Texteditor für Notizen oder um Python Code zuschreiben. ",
      side: "left",
    },
    {
      name: "Spiel Info Website",
      lang: "Typescript",
      link: "https://github.com/Moritz344/raid-log",
      img: "arc_raiders.jpg",
      desc: "Eine Info Website über das Spiel Arc Raiders. Es gibt die möglichkeit nach Gegenständen vom Spiel,nach Quests ,nach Gegenern (Arcs) und Händlern zu suchen.",
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
}
