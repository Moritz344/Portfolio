import { Component } from "@angular/core";
import { ProjectComponent } from "../project/project.component";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { TopbarComponent } from "../topbar/topbar.component";
import { BadgeComponent } from "../badge/badge.component";
import { Project } from "../models/project.models";
import { BottomComponent } from '../bottom/bottom.component';

@Component({
  selector: "app-front-page",
  standalone: true,
  imports: [
    ProjectComponent,
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
      desc: "Eine Web App zum Durchsuchen von Mangas und Animes.",
      ImgWidth: 500,
      ImgHeight: 280,
    },

    {
      name: "Texteditor",
      lang: "Python",
      link: "https://github.com/Moritz344/Texteditor",
      img: "texteditor.png",
      desc: "Ein einfach gehaltener Texteditor für Notizen oder zum Schreiben von Python Code.",
      ImgWidth: 500,
      ImgHeight: 280,
    },

    {
      name: "Pixel Simulation",
      lang: "Python",
      link: "https://github.com/Moritz344/Simulation-of-Life",
      img: "pixel-sim.png",
      desc: "Pixel, die Leben simulieren. Es geht um kleine Pixel in einem Grid, die Regeln befolgen.",
      ImgWidth: 500,
      ImgHeight: 280,
    },

    {
      name: "Spiel Info Website",
      lang: "Typescript",
      link: "https://github.com/Moritz344/raid-log",
      img: "arc_raiders.jpg",
      desc: "Eine Info Website über das Spiel Arc Raiders.",
      ImgWidth: 500,
      ImgHeight: 300,
    },
    {
      name: "Notizen App",
      lang: "Typescript",
      link: "https://github.com/Moritz344/Coal",
      img: "notes.png",
      desc: "Eine minimale Notizen App.",
      ImgWidth: 500,
      ImgHeight: 300,
    },

    {
      name: "Twitch Client",
      lang: "Typescript",
      link: "https://github.com/Moritz344/lurker",
      img: "chat_client.png",
      desc: "Ein chat client für twitch.tv.",
      ImgWidth: 500,
      ImgHeight: 300,
    },
  ];

  projectsInWork: Project[] = [
    {
      name: "Notizen App",
      lang: "Typescript",
      link: "https://github.com/Moritz344/coal",
      img: "notes.png",
      desc: "Eine minimale Notizen app.",
      ImgWidth: 500,
      ImgHeight: 300,
    },
    {
      name: "Linux App Launcher",
      lang: "Typescript",
      link: "https://github.com/Moritz344/Gravel",
      img: "gravel_zoom.png",
      desc: "Ein App Launcher für Linux.",
      ImgWidth: 500,
      ImgHeight: 300,
    },
  ];

  links = [
    {
      name: "Github",
      link: "https://github.com/Moritz344",
      desc: "Mein Github.",
      img: "",
      ImgWidth: 0,
      ImgHeight: 0,
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
