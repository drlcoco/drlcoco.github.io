import { Injectable, signal } from "@angular/core";
import { isSection, SECTION, Section } from "../models/sections.types";

@Injectable({
  providedIn: 'root'
})
export class ScrollTrackerService {
  readonly activeSection = signal<Section>(SECTION.initial);

  constructor() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  private onScroll(): void {
    const sections = document.querySelectorAll('.section');
    let currentSection: Section = this.activeSection();

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        const newSection = section.id;
        if (!isSection(newSection)) {
          return;
        }
        currentSection = newSection;
      }
    });

    if (currentSection) {
      this.activeSection.set(currentSection);
    }
  }
}
