import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FrontPageComponent,TopbarComponent,AboutComponent,BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-site';

}
