import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recordingStudios } from 'src/app/recordingStudios.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from '@firebase/util';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-recording',
  templateUrl: './update-recording.page.html',
  styleUrls: ['./update-recording.page.scss'],
})
export class UpdateRecordingPage implements OnInit {

  item = {} as recordingStudios;
  recordingId: any;
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
  ) { this.recordingId = this.route.snapshot.paramMap.get('id') }

  ngOnInit() {
    this.getPostById(this.recordingId)
  }

  async getPostById(id: string) {
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    this.angularFirestore
      .doc("recordingList/" + id)
      .valueChanges()
      .subscribe(data => {
        this.item.nameRecording = data["nameRecording"];
        this.item.type_of_melody = data["type_of_melody"];
        this.item.number_of_cabins = data["number_of_cabins"];
        this.item.owner = data["owner"];

        loader.dismiss();
      });
  }

  async updateRecording(recording: recordingStudios) {
    if (this.formValidation()) {
      let loader = await this.loadingCtrl.create({
        message: "Actualizando datos..."
      });
      loader.present();

      try {
        await this.angularFirestore.doc("recordingList/" + this.recordingId).update(recording);
      } catch (e) {
        this.showToast(e);
      }

      await loader.dismiss();

      this.navCtrl.navigateRoot("recording-studios");
    }
  }

  formValidation() {
    if (!this.item.nameRecording) {
      this.showToast("Add name recording");
      return false;
    }

    if (!this.item.number_of_cabins) {
      this.showToast("Add number of cabins");
      return false;
    }

    if (!this.item.type_of_melody) {
      this.showToast("Add type of melody");
      return false;
    }

    if (!this.item.owner) {
      this.showToast("Add owner");
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
