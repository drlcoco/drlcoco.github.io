import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('posterVideo') private readonly posterVideo?: ElementRef<HTMLVideoElement>;

  // Cache-busting: evita que el navegador sirva una copia antigua cacheada
  // cada vez que se reemplaza el fichero de vídeo con el mismo nombre.
  readonly videoSrc = `assets/videos/MSC_nosound.mp4?v=${Date.now()}`;

  // Frase destacada del titular; se anima letra a letra sobre el hueco que
  // dejó el cartel (antes llevaba el texto quemado en el PNG).
  // Líneas fijas (en vez de un único string) para que el salto de línea caiga
  // siempre entre "MUY" y "GRANDE.", nunca a mitad de palabra.
  readonly punchlineLines = this.buildPunchlineLines(['ALGO MUY', 'GRANDE.']);

  letterDelay(index: number): string {
    // Cadencia más lenta y deliberada entre cada letra.
    return `${1100 + index * 90}ms`;
  }

  private buildPunchlineLines(lines: string[]) {
    let index = 0;
    return lines.map((line) => ({
      letters: line.split('').map((char) => ({ char, index: index++ })),
    }));
  }

  ngAfterViewInit(): void {
    const video = this.posterVideo?.nativeElement;
    if (!video) {
      return;
    }
    // Forzar la propiedad (no solo el atributo) es lo que garantiza el autoplay silencioso en todos los navegadores.
    video.muted = true;
    video.play().catch(() => {
      /* el navegador bloqueó el autoplay; se queda en el primer frame */
    });
  }
}
