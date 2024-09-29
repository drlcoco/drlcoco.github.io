import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent implements OnInit{

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

  images5 = [
    { src: '/assets/images/project5/image00001.webp', alt: 'image00001' },
    { src: '/assets/images/project5/image00002.webp', alt: 'image00002' },
    { src: '/assets/images/project5/image00003.webp', alt: 'image00003' },
    { src: '/assets/images/project5/image00004.webp', alt: 'image00004' },
    { src: '/assets/images/project5/image00005.webp', alt: 'image00005' },
    { src: '/assets/images/project5/image00006.webp', alt: 'image00006' },
    { src: '/assets/images/project5/image00007.webp', alt: 'image00007' },
    { src: '/assets/images/project5/image00008.webp', alt: 'image00008' },
    { src: '/assets/images/project5/image00009.webp', alt: 'image00009' },
    { src: '/assets/images/project5/image00010.webp', alt: 'image00010' }
  ];

  currentIndex4: number = 0;
  currentIndex5: number = 0;
  currentSrc4!: string;
  currentSrc5!: string;
  showButtonPrevious4: boolean = false;
  showButtonNext4: boolean = true;
  showButtonPrevious5: boolean = false;
  showButtonNext5: boolean = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Cambiar alguna propiedad aquí
    this.cdr.detectChanges(); // Forzar detección de cambios
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

  showNext4(): void {
    this.currentIndex4 = (this.currentIndex4 + 1) % this.images4.length;
    this.showButtonPrevious4 = true;
  }

  showPrevious4(): void {
    this.showButtonNext4 = true;
    this.currentIndex4 = (this.currentIndex4 - 1 + this.images4.length) % this.images4.length;
  }

  showNext5(): void {
    this.currentIndex5 = (this.currentIndex5 + 1) % this.images4.length;
    this.showButtonPrevious5 = true;
  }

  showPrevious5(): void {
    this.showButtonNext5 = true;
    this.currentIndex5 = (this.currentIndex5 - 1 + this.images4.length) % this.images4.length;
  }

  setImage4(event: any): void {
    this.currentSrc4 = event.srcElement.src;
  }

  setImage5(event: any): void {
    this.currentSrc5 = event.srcElement.src;
  }

}
