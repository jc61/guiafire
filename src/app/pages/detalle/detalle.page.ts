import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from 'src/app/song.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from 'rxjs/internal/Observable';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  song:any = {}
  songId:any;
  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
    this.songId = this.route.snapshot.paramMap.get('id')
    this.song = this.firestoreService.getSongDetalle(this.songId).valueChanges()
  }

  async deleteSong() {
    const alert = await this.alertController.create({ message: 'Esta seguro que quiere eliminar la canción?', buttons: [
      { text: 'Cancel', role: 'cancel', handler: blah => {
          console.log('Confirm Cancel: blah');
        }, 
      },
      {
        text: 'Okay', handler: () => {
          this.firestoreService.deleteSong(this.songId).then(() => {
            this.router.navigateByUrl('home')
          });
        },
      },], 
    });
    await alert.present();
  }
}
