import { Component, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements AfterViewInit, OnDestroy {
  router = inject(Router);

  public isMobile: boolean = false;
  public toggleNav: boolean = false;
  public selectedFragment: string = 'home';

  private observer!: IntersectionObserver;

  constructor(private device: DeviceDetectorService) {
    if (device.deviceType === "mobile") {
      this.isMobile = true;
    }
  }

  ngAfterViewInit() {
    const sections = ['home', 'about', 'skills', 'projekte'];
    
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.selectedFragment = entry.target.id;
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  goto(fragment: string): void {
    this.selectedFragment = fragment;
    this.router.navigate(['/'], { fragment }).then(() => {
      setTimeout(() => {
        const el = document.getElementById(fragment);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }

  onNavToggle() {
    this.toggleNav = !this.toggleNav;
  }

}
