import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { Image } from '../../interfaces/image';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-proyects',
  imports: [CarouselComponent, CardComponent],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectsComponent implements OnInit, AfterViewInit{

  folder = ''; // Carpeta predeterminada

  images4: Image[] = [
    { src: '/assets/images/project4/image00001.webp', alt: '#image00001' },
    { src: '/assets/images/project4/image00002.webp', alt: '#image00002' },
    { src: '/assets/images/project4/image00003.webp', alt: '#image00003' },
    { src: '/assets/images/project4/image00004.webp', alt: '#image00004' },
    { src: '/assets/images/project4/image00005.webp', alt: '#image00005' },
    { src: '/assets/images/project4/image00006.webp', alt: '#image00006' },
    { src: '/assets/images/project4/image00007.webp', alt: '#image00007' },
    { src: '/assets/images/project4/image00008.webp', alt: '#image00008' },
    { src: '/assets/images/project4/image00009.webp', alt: '#image00009' },
    { src: '/assets/images/project4/image00010.webp', alt: '#image00010' },
    { src: '/assets/images/project4/image00011.webp', alt: '#image00011' },
    { src: '/assets/images/project4/image00012.webp', alt: '#image00012' },
    { src: '/assets/images/project4/image00013.webp', alt: '#image00013' }
  ];

  images5: Image[]= [
    { src: '/assets/images/project5/image00001.webp', alt: '#image00001' },
    { src: '/assets/images/project5/image00002.webp', alt: '#image00002' },
    { src: '/assets/images/project5/image00003.webp', alt: '#image00003' },
    { src: '/assets/images/project5/image00004.webp', alt: '#image00004' },
    { src: '/assets/images/project5/image00005.webp', alt: '#image00005' },
    { src: '/assets/images/project5/image00006.webp', alt: '#image00006' },
    { src: '/assets/images/project5/image00008.webp', alt: '#image00008' },
    { src: '/assets/images/project5/image00007.webp', alt: '#image00007' },
    { src: '/assets/images/project5/image00009.webp', alt: '#image00009' },
    { src: '/assets/images/project5/image00010.webp', alt: '#image00010' }
  ];

  images6: Image[] = [
    { src: `/assets/images/project6/${this.folder}/image00001.webp`, alt: '#image00001' },
    { src: `/assets/images/project6/${this.folder}/image00002.webp`, alt: '#image00002' },
    { src: `/assets/images/project6/${this.folder}/image00003.webp`, alt: '#image00003' },
    { src: `/assets/images/project6/${this.folder}/image00004.webp`, alt: '#image00004' },
    { src: `/assets/images/project6/${this.folder}/image00005.webp`, alt: '#image00005' },
    { src: `/assets/images/project6/${this.folder}/image00006.webp`, alt: '#image00006' },
    { src: `/assets/images/project6/${this.folder}/image00007.webp`, alt: '#image00007' },
    { src: `/assets/images/project6/${this.folder}/image00008.webp`, alt: '#image00008' },
    { src: `/assets/images/project6/${this.folder}/image00009.webp`, alt: '#image00009' },
    { src: `/assets/images/project6/${this.folder}/image000010.webp`, alt: '#image000010' }
  ];

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

    if (width <= 576) {
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
    }));

  }

  ngAfterViewInit() {
    //this.algunaCondicion = true; // Actualiza la condición
    this.cdr.detectChanges(); // Fuerza a Angular a ejecutar la detección de cambios nuevamente
  }

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

  get displayedImages5() {
    const prevIndex = (this.currentIndex5 - 1 + this.images5.length) % this.images5.length;
    const nextIndex = (this.currentIndex5 + 1) % this.images5.length;

    this.showButtonPrevious5 = this.currentIndex5 !== 1;

    if(this.images5[prevIndex] === undefined) {
      this.showButtonPrevious5 = false;
      return [
        { ...this.images5[this.currentIndex5], class: 'center' },
        { ...this.images5[nextIndex], class: 'right' }
      ];
    } else if(this.images5[nextIndex] === this.images5[this.images5.length]) {
      this.showButtonNext5 = false;
      return [
        { ...this.images5[prevIndex], class: 'left' },
        { ...this.images5[this.currentIndex5], class: 'center' }
      ];
    }
    this.showButtonPrevious5 = this.currentIndex5 !== 1;
    this.showButtonNext5 = true;
    return [
      { ...this.images5[prevIndex], class: 'left' },
      { ...this.images5[this.currentIndex5], class: 'center' },
      { ...this.images5[nextIndex], class: 'right' }
    ];
  }

  get displayedImages6() {
    const prevIndex = (this.currentIndex6 - 1 + this.images6.length) % this.images6.length;
    const nextIndex = (this.currentIndex6 + 1) % this.images6.length;

    this.showButtonPrevious6 = this.currentIndex6 !== 1;

    if(this.images6[prevIndex] === undefined) {
      this.showButtonPrevious6 = false;
      return [
        { ...this.images6[this.currentIndex6], class: 'center' },
        { ...this.images6[nextIndex], class: 'right' }
      ];
    } else if(this.images6[nextIndex] === this.images6[this.images6.length]) {
      this.showButtonNext6 = false;
      return [
        { ...this.images6[prevIndex], class: 'left' },
        { ...this.images6[this.currentIndex6], class: 'center' }
      ];
    }
    this.showButtonPrevious6 = this.currentIndex6 !== 1;
    this.showButtonNext6 = true;
    return [
      { ...this.images6[prevIndex], class: 'left' },
      { ...this.images6[this.currentIndex6], class: 'center' },
      { ...this.images6[nextIndex], class: 'right' }
    ];
  }

  showNext4(): void {
    this.currentIndex4 = (this.currentIndex4 + 1) % this.images4.length;
    this.showButtonPrevious4 = true;
  }

  showPrevious4(): void {
    this.showButtonNext4 = true;
    this.currentIndex4 = (this.currentIndex4 - 1 + this.images4.length) % this.images4.length;
  }

  showNext5(): void {
    this.currentIndex5 = (this.currentIndex5 + 1) % this.images5.length;
    this.showButtonPrevious5 = true;
  }

  showPrevious5(): void {
    this.showButtonNext5 = true;
    this.currentIndex5 = (this.currentIndex5 - 1 + this.images5.length) % this.images5.length;
  }

  showNext6(): void {
    this.currentIndex6 = (this.currentIndex6 + 1) % this.images6.length;
    this.showButtonPrevious6 = true;
  }

  showPrevious6(): void {
    this.showButtonNext6 = true;
    this.currentIndex6 = (this.currentIndex6 - 1 + this.images6.length) % this.images6.length;
  }

  setImage4(event: any): void {
    this.currentSrc4 = event.srcElement.src;
  }

  setImage5(event: any): void {
    this.currentSrc5 = event.srcElement.src;
  }

  setImage6(event: any): void {
    this.currentSrc6 = event.srcElement.src;
  }

  getResponsiveImageSrc(image: any): string {
    return image.src.replace('.webp', '-responsive.webp');
  }

}
