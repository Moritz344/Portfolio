import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiAnimationComponent } from './ascii-animation.component';

describe('AsciiAnimationComponent', () => {
  let component: AsciiAnimationComponent;
  let fixture: ComponentFixture<AsciiAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsciiAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsciiAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
