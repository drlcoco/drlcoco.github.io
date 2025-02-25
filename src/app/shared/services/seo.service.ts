import { inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);


  public setSEO(): void {
    this.titleService.setTitle('ESTUDIO NOVENTA Y SEIS');
    this.metaService.updateTag({ name: 'author', content: 'ESTUDIO DE DISEÑO Y ARQUITECTURA DE INTERIOR' });
    this.metaService.updateTag({ name: 'description', content: 'Estudio Noventa y Seis es un estudio de diseño y arquitectura de interior que ofrece soluciones creativas y personalizadas para transformar tus espacios. Nos dedicamos a crear ambientes únicos y funcionales que reflejen tu estilo y necesidades.' });

    this.metaService.updateTag({ name: 'keywords', content: 'diseño de interiores, arquitectura de interior, soluciones creativas, personalizadas, transformar espacios, ambientes únicos, funcionales, estilo, necesidades, Estudio Noventa y Seis' });

    /*     this.metaService.updateTag({ property: 'og:title', content: 'ESTUDIO NOVENTA Y SEIS' });
        this.metaService.updateTag({ property: 'og:description', content: 'Estudio Noventa y Seis es un estudio de diseño y arquitectura de interior que ofrece soluciones creativas y personalizadas para transformar tus espacios. Nos dedicamos a crear ambientes únicos y funcionales que reflejen tu estilo y necesidades.' }); */
    /* this.metaService.updateTag({ property: 'og:image', content: 'https://estudionoventayseis.com/assets/img/logo.png' }); */


  }
}
