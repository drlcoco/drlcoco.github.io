import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../components/about/about.component';
import { StartComponent } from '../components/start/start.component';
import { ProyectsComponent } from '../components/proyects/proyects.component';
import { ContactComponent } from '../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StartComponent, AboutComponent, ProyectsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @HostListener('window:hashchange', ['$event'])
  onHashChange(event: Event) {
    this.scrollToElement();
  }

  ngOnInit() {
    this.scrollToElement();
  }

  private scrollToElement(): void {
    const element = document.querySelector(location.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}

