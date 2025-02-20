import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { Swiper } from 'swiper';
// Importa Swiper en tu componente Angular
import { SwiperOptions } from 'swiper/types';

// Importa estilos de Swiper
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent {

  currentIndex4: number = 0;
    currentIndex5: number = 0;
    currentIndex6: number = 0;
    currentSrc4!: string;
    currentSrc5!: string;
    currentSrc6!: string;
    showButtonPrevious4: boolean = false;
    showButtonNext4: boolean = true;
    showButtonPrevious5: boolean = false;
    showButtonNext5: boolean = true;
    showButtonPrevious6: boolean = false;
    showButtonNext6: boolean = true;

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
      // Cambiar alguna propiedad aquí
      this.updateImagePaths(); // Configura las imágenes según el tamaño inicial
      this.cdr.detectChanges(); // Forzar detección de cambios
    }

    // Escucha cambios en el tamaño de la ventana
    @HostListener('window:resize', ['$event'])
    onResize(): void {
      this.updateImagePaths();
    }

    // Actualiza las rutas de las imágenes según el ancho de la pantalla
    updateImagePaths(): void {
      const width = window.innerWidth;

      /* if (width <= 576) {
        this.folder = 'sm_xs';
      } else if (width <= 768) {
        this.folder = 'md';
      } else if (width <= 992) {
        this.folder = 'lg';
      } else {
        this.folder = 'xxl';
      }

      // Actualiza las rutas de las imágenes dinámicamente
      this.images6 = this.images6.map((img, index) => ({
        ...img,
        src: `/assets/images/project6/${this.folder}/image0000${index + 1}.webp`
      })); */

    }

    ngAfterViewInit() {
      //this.algunaCondicion = true; // Actualiza la condición
      this.cdr.detectChanges(); // Fuerza a Angular a ejecutar la detección de cambios nuevamente
    }

  images4 = [
    { src: '/assets/images/project4/image00001.webp', alt: 'image00001' },
    { src: '/assets/images/project4/image00002.webp', alt: 'image00002' },
    { src: '/assets/images/project4/image00003.webp', alt: 'image00003' },
    { src: '/assets/images/project4/image00004.webp', alt: 'image00004' },
    { src: '/assets/images/project4/image00005.webp', alt: 'image00005' },
    { src: '/assets/images/project4/image00006.webp', alt: 'image00006' },
    { src: '/assets/images/project4/image00007.webp', alt: 'image00007' },
    { src: '/assets/images/project4/image00008.webp', alt: 'image00008' },
    { src: '/assets/images/project4/image00009.webp', alt: 'image00009' },
    { src: '/assets/images/project4/image00010.webp', alt: 'image00010' },
    { src: '/assets/images/project4/image00011.webp', alt: 'image00011' },
    { src: '/assets/images/project4/image00012.webp', alt: 'image00012' },
    { src: '/assets/images/project4/image00013.webp', alt: 'image00013' }
  ];

  get displayedImages4() {
    const prevIndex = (this.currentIndex4 - 1 + this.images4.length) % this.images4.length;
    const nextIndex = (this.currentIndex4 + 1) % this.images4.length;

    this.showButtonPrevious4 = this.currentIndex4 !== 1;

    if(this.images4[prevIndex] === undefined) {
      this.showButtonPrevious4 = false;
      return [
        { ...this.images4[this.currentIndex4], class: 'center' },
        { ...this.images4[nextIndex], class: 'right' }
      ];
    } else if(this.images4[nextIndex] === this.images4[this.images4.length]) {
      this.showButtonNext4 = false;
      return [
        { ...this.images4[prevIndex], class: 'left' },
        { ...this.images4[this.currentIndex4], class: 'center' }
      ];
    }
    this.showButtonPrevious4 = this.currentIndex4 !== 1;
    this.showButtonNext4 = true;
    return [
      { ...this.images4[prevIndex], class: 'left' },
      { ...this.images4[this.currentIndex4], class: 'center' },
      { ...this.images4[nextIndex], class: 'right' }
    ];
  }

  setImage4(src: string): void {
    this.currentSrc4 = src;
    console.log(src);
  }

}
