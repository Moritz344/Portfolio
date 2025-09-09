import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-topbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  isMobile: boolean = false;
  toggleNav: boolean = false;


  constructor(private device: DeviceDetectorService) {
    if (device.deviceType === "mobile") {
      this.isMobile = true;
    }
  }

  onNavToggle() {
    this.toggleNav = !this.toggleNav;
  }



}
