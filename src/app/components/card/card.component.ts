import { AfterViewInit, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
// Importa estilos de Swiper
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { Image } from '../../interfaces/image';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardComponent implements OnInit, AfterViewInit {

  @Input() images: Image[] = [];

  currentSrc?: string ;

  currentId?: string;
  dataBsTarget?: string;
  project4:string = 'project4';
  project5:string = 'project5';
  project6:string = 'project6';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    switch (this.images[0].src.split('/')[3]) {
      case this.project4:
        this.currentId = this.project4;
        break;
      case this.project5:
        this.currentId = this.project5;
        break;
      case this.project6:
        this.currentId = this.project6;
        break;
    }
    this.cdr.detectChanges(); // Forzar detección de cambios
  }

  ngAfterViewInit() {
    this.cdr.detectChanges(); // Fuerza a Angular a ejecutar la detección de cambios nuevamente
  }

  setImage(src: string): void {
    this.currentSrc = src;
    this.cdr.detectChanges();
  }

}
