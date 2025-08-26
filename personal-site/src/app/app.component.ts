import { RouterOutlet } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FrontPageComponent,TopbarComponent,AboutComponent,SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-site';

  constructor(private router: Router, private route: ActivatedRoute) {}

   ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

}
