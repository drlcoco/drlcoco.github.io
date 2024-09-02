import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public isHeaderVisible: boolean = true; // Cambiar a isHeaderVisible
  private lastScrollTop: number = 0;
  private scrollThreshold: number = 150;
  isToggle: boolean = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > this.lastScrollTop && currentScrollTop > this.scrollThreshold) {
      // Scrolling hacia abajo: esconder header
      this.isHeaderVisible = false;
    } else if (currentScrollTop < this.lastScrollTop) {
      // Scrolling hacia arriba: mostrar header
      this.isHeaderVisible = true;
    }

    // Actualizar la posición de scroll anterior
    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }

  changeToggle() {
    this.isToggle = !this.isToggle;
  }

  setActiveTab(tab: string): boolean {
    return tab === this.router.url;
  }
}

