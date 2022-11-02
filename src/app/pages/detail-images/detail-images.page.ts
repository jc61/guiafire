import { Component, OnInit } from '@angular/core';
import{Observable}from "rxjs";
import{ActivatedRoute} from '@angular/router';
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { ImagesService } from '../images.service';
import { Image } from 'src/app/image.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-detail-images',
  templateUrl: './detail-images.page.html',
  styleUrls: ['./detail-images.page.scss'],
})
export class DetailImagesPage implements OnInit {

  images:any={};
  img:any={}
  isCargando: boolean = true;
  imagesList: any

  constructor(
    private imagesService:ImagesService, 
    private activatedRoute:ActivatedRoute,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController,
    private firestoreService: FirestoreService,
  ) { }

  ngOnInit() {
    const id= this.activatedRoute.snapshot.paramMap.get('id');
    this.firestoreService.getImgDetalle(id).subscribe( res => {
      this.imagesList = res
    });
    this.imagesService.getImagesDetail(id).subscribe(resp => {
      this.images = resp
      this.isCargando = false
    });
  }

  async addImage(images: Image) {
    
    if(this.imagesList.length > 0){
      this.showToast("Esta imagen ya existe en la colección de firestore");
    } else {
      let loader = await this.loadingCtrl.create({
        message: "Add Image..."
      });
      loader.present();
  
      try {
        await this.firestore.collection("imageList").add(images);
      } catch (e) {
        this.showToast(e);
      }
  
      loader.dismiss();
  
      this.navCtrl.navigateRoot("images");
    }
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000
      })
      .then(toastData => toastData.present());
}

}
