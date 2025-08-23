import { Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';


export const routes: Routes = [

    { path: '',component: FrontPageComponent}, // Startseite
    { path: 'about',component: AboutComponent}, // About page
    { path: 'blog',component: BlogComponent}, // Blog page

];
