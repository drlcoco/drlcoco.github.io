import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, Signal } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Section, SECTION } from '../../shared/models/sections.types';
import { ScrollTrackerService } from '../../shared/services/scroll-tracker.service';

@Component({
    selector: 'app-navbar',
    imports: [RouterModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private readonly scrollTracker = inject(ScrollTrackerService);
  protected readonly SECTION = SECTION;
  protected readonly activeSection: Signal<Section>;


  public isHeaderVisible: boolean = true; // Cambiar a isHeaderVisible
  private lastScrollTop: number = 0;
  private scrollThreshold: number = 150;
  isToggle: boolean = false;

  constructor(private router: Router) {
    this.activeSection = this.scrollTracker.activeSection;
  }

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

