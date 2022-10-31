import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Router } from '@angular/router';
//import { error } from 'console';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  public createSongForm: any;

  constructor(public loadingCtrl: LoadingController, public alertCrtl: AlertController, public firestoreService: FirestoreService,
    formBuilder: FormBuilder, public router: Router) {

      this.createSongForm = formBuilder.group({
        albumName: ['', Validators.required],
        artistName: ['', Validators.required],
        songDescription: ['', Validators.required],
        songName: ['', Validators.required],
      })
  }

  ngOnInit() {
  }

  async createSong() {
    const loading = await this.loadingCtrl.create({ message: 'Guardando Datos!!' })
    const albumName = this.createSongForm.value.albumName;
    const artistName = this.createSongForm.value.artistName;
    const songDescription = this.createSongForm.value.songDescription;
    const songName = this.createSongForm.value.songName;
    this.firestoreService.createSong(albumName, artistName, songDescription, songName).then(
      () => {
        loading.dismiss().then(() => {
          this.router.navigateByUrl('')
        })
      },
      error => {
        console.error(error)
      }
    )
    return await loading.present()
  }

}
