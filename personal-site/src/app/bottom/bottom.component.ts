import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom',
  imports: [],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.css'
})
export class BottomComponent {
  currentYear: any;
  constructor() {
    this.currentYear = new Date().getFullYear() ;
  }

}
