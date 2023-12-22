import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';

import { Galleria } from 'primeng/galleria';

@Component({
  selector: 'app-galeria-solicitadas',
  templateUrl: './galeria-solicitadas.component.html',
  styleUrls: ['./galeria-solicitadas.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class GaleriaSolicitadasComponent implements OnInit, OnDestroy {

  @ViewChild('galleria') galleria: Galleria | undefined;
  @Input('images') images!: any[];
  @Input('imagesTec') imagesTec!: any[];

  position: string = 'bottom';
  fullscreen: boolean = false;
  activeIndex: number = 0;
  onFullScreenListener: any;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];


  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.bindDocumentListeners();
  }

  ngOnDestroy(): void {
    this.unbindDocumentListeners();
  }

  toggleFullScreen() {
    if (this.fullscreen) {
        this.closePreviewFullScreen();
    } else {
        this.openPreviewFullScreen();
    }

    this.cd.detach();
  }

  openPreviewFullScreen() {
    let elem = this.galleria?.element.nativeElement.querySelector('.p-galleria');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem['mozRequestFullScreen']) {
        /* Firefox */
        elem['mozRequestFullScreen']();
    } else if (elem['webkitRequestFullscreen']) {
        /* Chrome, Safari & Opera */
        elem['webkitRequestFullscreen']();
    } else if (elem['msRequestFullscreen']) {
        /* IE/Edge */
        elem['msRequestFullscreen']();
    }
  }

  onFullScreenChange() {
    this.fullscreen = !this.fullscreen;
    this.cd.detectChanges();
    this.cd.reattach();
  }

  closePreviewFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any)['mozCancelFullScreen']) {
      (document as any)['mozCancelFullScreen']();
    } else if ((document as any)['webkitExitFullscreen']) {
      (document as any)['webkitExitFullscreen']();
    } else if ((document as any)['msExitFullscreen']) {
      (document as any)['msExitFullscreen']();
    }
  }
  bindDocumentListeners() {
    this.onFullScreenListener = this.onFullScreenChange.bind(this);
    document.addEventListener('fullscreenchange', this.onFullScreenListener);
    document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
    document.addEventListener('webkitfullscreenchange', this.onFullScreenListener);
    document.addEventListener('msfullscreenchange', this.onFullScreenListener);
  }

  unbindDocumentListeners() {
    document.removeEventListener('fullscreenchange', this.onFullScreenListener);
    document.removeEventListener('mozfullscreenchange', this.onFullScreenListener);
    document.removeEventListener('webkitfullscreenchange', this.onFullScreenListener);
    document.removeEventListener('msfullscreenchange', this.onFullScreenListener);
    this.onFullScreenListener = null;
  }

  galleriaClass() {
    return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
  }

  fullScreenIcon() {
    return `pi ${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
  }
}
