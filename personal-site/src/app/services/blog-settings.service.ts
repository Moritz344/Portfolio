import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.models';

@Injectable({
  providedIn: 'root'
})
export class BlogSettingsService {


  blogArray: Blog[] = [
    {
      date: '29 Aug, 2025',
      name: 'Hello World',
      text: `
      Hallo Welt!
      `
    },
  ];

  currentSelectedBlog: Blog[] = [];

  constructor() { }

  setCurrentSelected(date: string, name: string,text: string): void {
    this.currentSelectedBlog = [{date,name,text}];

  }

  getCurrentSelectedBlog(): Blog[] {
    return this.currentSelectedBlog;

  }

  getBlogItems(): Blog[] {
    return this.blogArray;
  }

  addBlog(name: string,date: string,text: string): void {
    this.blogArray.push({date: date,name: name,text});
  }

  removeBlog(data: Blog[]): void {
    //const index = this.blogArray.indexOf(data);
    //console.log(index);
    //this.blogArray.splice(0,1);
  }

}
