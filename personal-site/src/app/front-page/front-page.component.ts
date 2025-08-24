import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { CommonModule} from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';

// TODO: show projects here / socials

@Component({
  selector: 'app-front-page',
  imports: [ProjectComponent,AboutComponent,SkillsComponent,CommonModule],
  templateUrl: "./front-page.component.html",
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent {


  projects = [
    {
      name: "Manga Web App",
      link: "https://github.com/Moritz344/MangaWebApp",img: "frontpage.png",
      desc: "Eine Manga Web app zum Durchsuchen und Suchen von Mangas. Mit der Mangadex api.  ",ImgWidth: 500,ImgHeight: 300},

    { name: "Texteditor",
      link: "https://github.com/Moritz344/Texteditor",
      img: "texteditor.png",desc: "Ein einfach gehaltener Texteditor für Notizen oder um python code zuschreiben.",ImgWidth: 500,ImgHeight: 300 },

    { name: "Pixel Sim",
      link: "https://github.com/Moritz344/Simulation-of-Life",img: "pixel-sim.png",
      desc: "Pixel die Leben Simulieren. Es geht um kleine pixel in einem grid die regeln befolgen.",ImgWidth: 500, ImgHeight: 300 },

    { name: "mcsh", link: "https://github.com/Moritz344/mcsh",img: "mcsh.png",
      desc: "Eine tui um sich mit minecraft servern zu verbinden und zu chatten.",ImgWidth: 500, ImgHeight: 300},

    { name: "SpaceInvaders", link: "https://github.com/Moritz344/SpaceInvader",img: "spaceinvader.png",
      desc: "Ein klassischer SpaceInvader klon.",ImgWidth: 500, ImgHeight: 300},

    { name: "Twitch Chat App", link: "https://github.com/Moritz344/Private-Twitch",img: "twich-chat.png",
      desc: "Eine gui um Twitch Chat Nachrichten zu lesen.",ImgWidth: 500, ImgHeight: 300},

  ];

  links = [
    {name: "Github",link:"https://github.com/Moritz344",
    desc:"Mein Github.",img:"",ImgWidth: 0,ImgHeight:0},

    {name: "Youtube",link:"https://www.youtube.com/@pennti",
    desc:"Mein Youtube.",img:"",ImgWidth: 0,ImgHeight:0},

    {name: "X",link:"https://x.com/iuseosu",
    desc:"Mein X.",img:"",ImgWidth: 0,ImgHeight:0},

  ]

  constructor() {}


}
