import { Component, HostListener, OnInit } from '@angular/core';
import { AboutComponent } from '../components/about/about.component';
import { StartComponent } from '../components/start/start.component';
import { ProyectsComponent } from '../components/proyects/proyects.component';
import { ContactComponent } from '../components/contact/contact.component';
import { SECTION } from '../shared/models/sections.types';

@Component({
    selector: 'app-home',
    imports: [StartComponent, AboutComponent, ProyectsComponent, ContactComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  protected readonly SECTIONS = SECTION;

  @HostListener('window:hashchange', ['$event'])
  onHashChange(event: Event) {
    this.scrollToElement();
  }

  ngOnInit() {
    this.scrollToElement();
  }

  private scrollToElement(): void {
    if (location.hash) { // Verifica que location.hash no esté vacío
      const element = document.querySelector(location.hash);
      if (element) {
        const headerOffset = 170;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn(`No se encontró ningún elemento con el selector: ${location.hash}`);
      }
    } else {
      console.warn('El hash de la URL está vacío.');
    }
  }
}

