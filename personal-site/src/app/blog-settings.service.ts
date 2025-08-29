import { Injectable } from '@angular/core';

export interface Blog {

  date: string;
  name: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogSettingsService {


  blogArray: Blog[] = [
    {date: '29 Aug, 2025',name: 'Hello World',
      text: `
      Hallo ich bins. Mal sehen ob ich mich irgendwann überwinde einen richtigen blog Eintrag
      hier zu schreiben. Aber bis dahin, tschau!
      `
    },
  ];

  currentSelectedBlog: Blog[] = [];

  constructor() { }

  setCurrentSelected(date: string, name: string,text: string) {
    this.currentSelectedBlog = [{date,name,text}];

  }

  getCurrentSelectedBlog(): Blog[] {
    return this.currentSelectedBlog;

  }

  getBlogItems(): Blog[] {
    return this.blogArray;
  }

  addBlog(name: string,date: string,text: string) {
    this.blogArray.push({date: date,name: name,text});
  }

  removeBlog() {}

}
