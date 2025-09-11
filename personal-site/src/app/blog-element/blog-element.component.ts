import { Component } from '@angular/core';
import { BlogSettingsService } from '../services/blog-settings.service';
import { Blog } from '../models/blog.models';
import { TopbarComponent } from '../topbar/topbar.component';
import { RouterModule } from '@angular/router';

// TODO: liste mit blog einträgen links zu denen man switchen kann

@Component({
  selector: 'app-blog-element',
  imports: [TopbarComponent,RouterModule],
  templateUrl: './blog-element.component.html',
  styleUrl: './blog-element.component.css'
})
export class BlogElementComponent {

  blogData: Blog[] = [];
  blogName = "";
  blogDate = "";
  blogText = "";


  constructor(private blogSettingsService: BlogSettingsService) {

	this.initBlog();



  }


  initBlog() {
    this.blogData = this.blogSettingsService.getCurrentSelectedBlog();
    this.blogName = this.blogData[0].name;
    this.blogDate = this.blogData[0].date;
    this.blogText= this.blogData[0].text;


  }

  saveBlog(name: string,date: string,text: string) {
    this.blogSettingsService.setCurrentSelected(date,name,text);
    this.initBlog();
  }

}
