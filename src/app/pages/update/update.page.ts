import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from 'src/app/song.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from '@firebase/util';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  song = {} as Song;
  songId: any;

  constructor(
    private firestoreService:FirestoreService,
    private route:ActivatedRoute,
    private alertController:AlertController,
    private router:Router,
    public formBuilder:FormBuilder,
    public angularFirestore:AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { this.songId = this.route.snapshot.paramMap.get('id') }

  ngOnInit() {
    this.getPostById(this.songId)
  }

  async getPostById(id: string) {
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    this.angularFirestore
      .doc("songList/" + id)
      .valueChanges()
      .subscribe(data => {
        this.song.albumName = data["albumName"];
        this.song.artistName = data["artistName"];
        this.song.songDescription = data["songDescription"];
        this.song.songName = data["songName"];

        loader.dismiss();
      });
  }

  async updateSong(song: Song) {
    if (this.formValidation()) {
      let loader = await this.loadingCtrl.create({
        message: "Actualizando datos..."
      });
      loader.present();

      try {
        await this.angularFirestore.doc("songList/" + this.songId).update(song);
      } catch (e) {
        this.showToast(e);
      }

      await loader.dismiss();

      this.navCtrl.navigateRoot("home");
    }
  }

  formValidation() {
    if (!this.song.albumName) {
      this.showToast("Ingrese albumName");
      return false;
    }

    if (!this.song.artistName) {
      this.showToast("Ingrese artistName");
      return false;
    }

    if (!this.song.songDescription) {
      this.showToast("Ingrese songDescription");
      return false;
    }

    if (!this.song.songName) {
      this.showToast("Ingrese songName");
      return false;
    }

    return true;
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
