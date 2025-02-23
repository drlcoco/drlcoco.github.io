import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements AfterViewInit {

  @ViewChild('videoPlayer') videoPlayer?: ElementRef;

  ngAfterViewInit() {
    this.focus();
    if (this.videoPlayer?.nativeElement) {
      this.videoPlayer.nativeElement.addEventListener('play', () => {
      });

      this.videoPlayer.nativeElement.addEventListener('pause', () => {
      });
    } else {
      console.error('El elemento videoPlayer no se encontró.');
    }
  }

  focus() {
    if (this.videoPlayer?.nativeElement) {
      this.videoPlayer.nativeElement.focus();
    } else {
      console.error('El elemento videoPlayer no está disponible.');
    }
  }
}



