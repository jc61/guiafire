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

  constructor(
    private imagesService: ImagesService
  ) { this.images = this.imagesService.getImages() }

  ngOnInit() {
  }

}
