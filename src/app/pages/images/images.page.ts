import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {

  images: Observable<any>
  isCargando: boolean = true;

  constructor(
    private imagesService: ImagesService
  ) { 
    
   }

  ngOnInit() {
    this.imagesService.getImages().subscribe(resp => {
      this.images = resp
      this.isCargando = false
    });
  }

}
