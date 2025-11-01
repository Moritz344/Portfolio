import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';

// dotfiles
// neovim config

@Component({
  selector: 'app-linux',
  standalone: true,
  imports: [TopbarComponent],
  templateUrl: './linux.component.html',
  styleUrl: './linux.component.css'
})
export class LinuxComponent {

  constructor() {}

}
