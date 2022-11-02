import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recording',
  templateUrl: './create-recording.page.html',
  styleUrls: ['./create-recording.page.scss'],
})
export class CreateRecordingPage implements OnInit {

  public createRecordingForm: any;

  constructor(
    public loadingCtrl: LoadingController, 
    public alertCrtl: AlertController, 
    public firestoreService: FirestoreService,
    formBuilder: FormBuilder, 
    public router: Router
  ) { 
    this.createRecordingForm = formBuilder.group({
      nameRecording: ['', Validators.required],
      type_of_melody: ['', Validators.required],
      number_of_cabins: ['', Validators.required],
      owner: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  async createRecording() {
    const loading = await this.loadingCtrl.create({ message: 'Guardando Datos!!' })
    const nameRecording = this.createRecordingForm.value.nameRecording;
    const type_of_melody = this.createRecordingForm.value.type_of_melody;
    const number_of_cabins = this.createRecordingForm.value.number_of_cabins;
    const owner = this.createRecordingForm.value.owner;
    this.firestoreService.createRecording(nameRecording, type_of_melody, number_of_cabins, owner).then(
      () => {
        loading.dismiss().then(() => {
          this.router.navigateByUrl('recording-studios')
        })
      },
      error => {
        console.error(error)
      }
    )
    return await loading.present()
  }

}
