import { Component,Input,Output,signal,EventEmitter,OnInit,OnChanges, HostListener } from '@angular/core';

@Component({
  selector: 'app-picture-list',
  imports: [],
  templateUrl: './picture-list.component.html',
  styleUrl: './picture-list.component.css'
})
export class PictureListComponent implements OnInit,OnChanges{
  @Input() images: string[] = [""];
  @Output() close = new EventEmitter<void>();
  public currentImage = signal<string>("");
  public currentIndex = signal<number>(0);
  public loading = signal(true)

  preloadImage(src: string) {
    this.loading.set(true);
    const img = new Image();
    img.onload = () => this.loading.set(false);
    img.onerror = () => this.loading.set(false);
    img.src = src;
  }

  constructor() {}

  onNextImage() {
    if (this.currentIndex() < this.images.length - 1) {
      const next = this.currentIndex() + 1;
      this.currentIndex.set(next);
      this.currentImage.set(this.images[next]);
      this.preloadImage(this.currentImage());
    }
  }

  onPrevImage() {
    if (this.currentIndex() > 0) {
      const prev = this.currentIndex() - 1;
      this.currentIndex.set(prev);
      this.currentImage.set(this.images[prev]);
      this.preloadImage(this.currentImage());
    }
  }

  @HostListener("window:keyup", ["$event"])
  onKeyup(event: KeyboardEvent) {
    if (event.key == "Escape") {
      this.close.emit();
    }
  }

  onClose() {
    this.close.emit();
  }

  ngOnInit() {}

  ngOnChanges() {
    this.currentIndex.set(0);
    this.currentImage.set(this.images[0]);
    this.preloadImage(this.currentImage());
  }
}
