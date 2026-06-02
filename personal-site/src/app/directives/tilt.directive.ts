import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class TiltDirective {
  @Input('appTilt') maxRotation = 10;
  @Input() tiltEase = 0.1;

  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private running = false;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.willChange = 'transform';
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    this.targetY = ((x - centerX) / centerX) * this.maxRotation;
    this.targetX = ((centerY - y) / centerY) * this.maxRotation;

    if (!this.running) {
      this.running = true;
      this.animate();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.targetX = 0;
    this.targetY = 0;
    if (!this.running) {
      this.running = true;
      this.animate();
    }
  }

  private animate() {
    this.currentX += (this.targetX - this.currentX) * this.tiltEase;
    this.currentY += (this.targetY - this.currentY) * this.tiltEase;

    this.el.nativeElement.style.transform =
      `perspective(800px) rotateX(${this.currentX}deg) rotateY(${this.currentY}deg)`;

    if (Math.abs(this.currentX) > 0.01 || Math.abs(this.currentY) > 0.01 ||
        Math.abs(this.targetX) > 0.01 || Math.abs(this.targetY) > 0.01) {
      requestAnimationFrame(() => this.animate());
    } else {
      this.currentX = 0;
      this.currentY = 0;
      this.running = false;
    }
  }
}
