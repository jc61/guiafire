import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { recordingStudios } from 'src/app/recordingStudios.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recording-studios',
  templateUrl: './recording-studios.page.html',
  styleUrls: ['./recording-studios.page.scss'],
})
export class RecordingStudiosPage implements OnInit {

  recordingList:any = [];

  constructor(
    private firestoreService: FirestoreService, private router: Router
  ) { }

  ngOnInit() {
    this.recordingList = this.firestoreService.getRecordingList().valueChanges()
  }

}
