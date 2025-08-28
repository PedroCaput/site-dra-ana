import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clinic-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clinic-carousel.component.html',
  styleUrls: ['./clinic-carousel.component.css']
})
export class ClinicCarouselComponent {
  images: string[] = [
    'assets/carrossel/carrossel-1.webp',
    'assets/carrossel/carrossel-2.webp',
    'assets/carrossel/carrossel-3.webp',
    'assets/carrossel/carrossel-4.webp',
    'assets/carrossel/carrossel-6.webp',
    'assets/carrossel/carrossel-9.webp',
    'assets/carrossel/carrossel-10.webp'
  ];

  currentIndex = 0;

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
