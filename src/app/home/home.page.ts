import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../song.interface';
import { FirestoreService } from '../services/data/firestore.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  songList:any = [];
  isCargando: boolean = true;

  constructor(
    public loadingCtrl: LoadingController,
    private firestoreService: FirestoreService, private router: Router, private authService:AuthService,
  ) {}

  ngOnInit(){
    this.firestoreService.getSongList().valueChanges().subscribe(resp => {
      this.songList = resp
      this.isCargando = false
    });
  }

  async cerrarSesion() {
    const loading = await this.loadingCtrl.create({ message: 'Cerrando Sesión!!' })
    this.authService.logoutUser().then(() => {
      loading.dismiss().then(() => {
        this.router.navigateByUrl('login');
      })
    },
    error => {
      console.error(error)
    }
    )
    return await loading.present()
  }

}
