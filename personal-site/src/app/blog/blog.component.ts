import { Component } from '@angular/core';
import { BlogSettingsService } from '../blog-settings.service';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from '../topbar/topbar.component';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [RouterModule,TopbarComponent,CommonModule,FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})

// TODO: datum + liste + search

export class BlogComponent {

  blogTestArray = [{date: 'sds',name:"ad",text: "sds"}];
  selectedBlog = [{}];
  searchArray: any = [{date: '',name: ''}];
  search = false;

  inputValue = "";
  searchParameters: any = [{ name: "", date: ""}];
  showNoSearchResult = true;


  constructor(private blogSettingsService: BlogSettingsService) {

    this.searchBlog("");
    this.blogTestArray = this.blogSettingsService.getBlogItems();


  }

  searchBlog(text: string) {

    if (text !== "") {
      for ( let i=0;i<this.blogTestArray.length;i++) {
        if (this.blogTestArray[i]["name"].includes(text)) {
          console.log(text,this.blogTestArray[i]["name"]);
          this.searchParameters.name = this.blogTestArray[i].name;
          this.showNoSearchResult = true;
        }else{
          this.showNoSearchResult = false;
        }
      }

      }else {
        this.searchParameters.name = "";
        this.showNoSearchResult = true;

      }

      this.search = true;

  }

  saveBlog(name: string,date: string,text: string) {
    this.blogSettingsService.setCurrentSelected(date,name,text);
  }

  addingBlog() {
    this.blogSettingsService.addBlog("test","2025-04-23","some text");
  }

}
