import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recordingStudios } from 'src/app/recordingStudios.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from 'rxjs/internal/Observable';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-recording',
  templateUrl: './detalle-recording.page.html',
  styleUrls: ['./detalle-recording.page.scss'],
})
export class DetalleRecordingPage implements OnInit {

  recording:any = {}
  recordingId:any;
  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
    this.recordingId = this.route.snapshot.paramMap.get('id')
    this.recording = this.firestoreService.getRecordingDetalle(this.recordingId).valueChanges()
  }

  async deleteRecording() {
    const alert = await this.alertController.create({ message: 'Esta seguro que quiere eliminar este registro?', buttons: [
      { text: 'Cancel', role: 'cancel', handler: blah => {
          console.log('Confirm Cancel: blah');
        }, 
      },
      {
        text: 'Okay', handler: () => {
          this.firestoreService.deleteRecording(this.recordingId).then(() => {
            this.router.navigateByUrl('recording-studios')
          });
        },
      },], 
    });
    await alert.present();
  }

}
