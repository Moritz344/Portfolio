import { FrontPageComponent } from './front-page/front-page.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes,  ExtraOptions } from '@angular/router';


export const routes: Routes = [

    { path: '',component: FrontPageComponent}, // Startseite
    { path: 'about',component: FrontPageComponent}, // About page
    { path: 'projects',component: FrontPageComponent}, // projects page

];

const routerOptions: ExtraOptions = {

  anchorScrolling: 'enabled',
  scrollOffset: [0,80],

};

@NgModule({

  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingMdule {}
