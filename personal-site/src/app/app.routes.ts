import { FrontPageComponent } from './front-page/front-page.component';
import { BlogComponent } from './blog/blog.component';
import { BlogElementComponent } from './blog-element/blog-element.component';
import { Routes  } from '@angular/router';
import { LinuxComponent } from './linux/linux.component';


export const routes: Routes = [

    { path: '',component: FrontPageComponent}, // Startseite
    { path: 'blog',component: BlogComponent}, // projects page
    { path: 'blog/:name',component: BlogElementComponent}, // projects page
    { path: 'linux',component: LinuxComponent},

];
