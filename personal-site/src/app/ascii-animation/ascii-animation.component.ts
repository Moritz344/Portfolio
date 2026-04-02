import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ascii-animation',
  imports: [CommonModule],
  templateUrl: './ascii-animation.component.html',
  styleUrl: './ascii-animation.component.css'
})
export class AsciiAnimationComponent {

  @Input() maxFontSize = 10;
  @Input() position: 'left' | 'right' = 'right';
  @Input() percentOfScreen = 30;

  colorSchemeArray: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.init();
    this.animateBackground();
  }

  private init(): void {
    this.colorSchemeArray =
      [
        '#88c0d0', '#81a1c1', '#5e81ac', '#a3be8c', '#ebcb8b', '#bf616a', '#d08770', '#b48ead',
        '#8fbcbb', '#eceff4', '#2e3440', '#3b4252', '#434c5e', '#4c566a'
      ];
  }

  private animateBackground(): void {
    const renderer = this.renderer;
    const elementRef = this.elementRef;

    //const chars = ["\ue62b", "\udb82\udcc7", "\uea85"];
    const char = "A";

    setInterval(() => {
      const duration = Math.floor(Math.random() * 15);
      const offset = Math.floor(Math.random() * this.percentOfScreen);
      const size = Math.floor(Math.random() * this.maxFontSize);
      const color = this.colorSchemeArray[Math.floor(Math.random() * this.colorSchemeArray.length)];

      const span = renderer.createElement('span');
      span.innerText = char[Math.floor(Math.random() * char.length)];
      renderer.addClass(span, 'animated-text');

      renderer.setStyle(span, 'color', color);
      renderer.setStyle(span, this.position, `${offset}vw`);
      renderer.setStyle(span, 'font-size', `${size}px`);
      renderer.setStyle(span, 'animation-duration', `${duration}s`);
      renderer.setStyle(span, 'color', color);

    }, 100);
  }
}
