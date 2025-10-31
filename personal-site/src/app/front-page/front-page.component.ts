import { Component } from "@angular/core";
import { ProjectComponent } from "../project/project.component";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { TopbarComponent } from "../topbar/topbar.component";
import { BadgeComponent } from "../badge/badge.component";
import { Project } from "../models/project.models";

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
  ],
  templateUrl: "./front-page.component.html",
  styleUrl: "./front-page.component.css",
})
export class FrontPageComponent {
  projects: Project[] = [
    {
      name: "Manga Web App",
      lang: "Typescript",
      link: "https://github.com/Moritz344/MangaWebApp",
      img: "frontpage.png",
      desc: "Eine Manga Web app zum Durchsuchen und Suchen von Mangas. Mit der Mangadex api.  ",
      ImgWidth: 500,
      ImgHeight: 280,
    },

    {
      name: "Texteditor",
      lang: "Python",
      link: "https://github.com/Moritz344/Texteditor",
      img: "texteditor.png",
      desc: "Ein einfach gehaltener Texteditor für Notizen oder um python code zuschreiben.",
      ImgWidth: 500,
      ImgHeight: 280,
    },

    {
      name: "Pixel Sim",
      lang: "Python",
      link: "https://github.com/Moritz344/Simulation-of-Life",
      img: "pixel-sim.png",
      desc: "Pixel die Leben Simulieren. Es geht um kleine pixel in einem grid die regeln befolgen.",
      ImgWidth: 500,
      ImgHeight: 280,
    },

    {
      name: "mcsh",
      lang: "Javascript",
      link: "https://github.com/Moritz344/mcsh",
      img: "mcsh.png",
      desc: "Eine TUI um sich mit minecraft servern zu verbinden und zu chatten.",
      ImgWidth: 500,
      ImgHeight: 300,
    },
    {
      name: "Notizen App",
      lang: "Typescript",
      link: "https://github.com/Moritz344/Coal",
      img: "notes.png",
      desc: "Eine minimale Notizen App." ,
      ImgWidth: 500,
      ImgHeight: 300,
    },

    {
      name: "Twitch Client",
      lang: "Typescript",
      link: "https://github.com/Moritz344/lurker",
      img: "lurker.png",
      desc: "Eine Twitch chat client für twitch.tv. Geschrieben mit Angular und Electron.",
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

  constructor() {}
}
