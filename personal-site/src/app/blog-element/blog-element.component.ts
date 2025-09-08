import { Component } from '@angular/core';
import { BlogSettingsService } from '../services/blog-settings.service';
import { Blog } from '../models/blog.models';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-blog-element',
  imports: [TopbarComponent],
  templateUrl: './blog-element.component.html',
  styleUrl: './blog-element.component.css'
})
export class BlogElementComponent {

  blogData: Blog[] = [];
  blogName = "";
  blogDate = "";
  blogText = "";

  constructor(private blogSettingsService: BlogSettingsService) {

    this.blogData = this.blogSettingsService.getCurrentSelectedBlog();
    this.blogName = this.blogData[0].name;
    this.blogDate = this.blogData[0].date;
    this.blogText= this.blogData[0].text;





  }


}
