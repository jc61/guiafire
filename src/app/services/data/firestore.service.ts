import { Injectable } from '@angular/core';
import { Song } from 'src/app/song.interface';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  getRecordingList() {
    return this.firestore.collection(`recordingList`)
  }

  constructor(public firestore: AngularFirestore) { }

  createSong(albumName: string, artistName: string, songDescription: string, songName: string) {
    const id = this.firestore.createId()
    return this.firestore.doc(`songList/${id}`).set({ id, albumName, artistName, songDescription, songName })
  }

  createRecording(nameRecording: string, type_of_melody: string, number_of_cabins: string, owner: string) {
    const id = this.firestore.createId()
    return this.firestore.doc(`recordingList/${id}`).set({ id, nameRecording, type_of_melody, number_of_cabins, owner })
  }

  getSongList(): AngularFirestoreCollection<Song> {
    return this.firestore.collection(`songList`)
  }

  getSongDetalle(songId: string): AngularFirestoreDocument<Song> {
    return this.firestore.collection(`songList`).doc(songId);
  }

  getRecordingDetalle(recordingId: string): AngularFirestoreDocument<Song> {
    return this.firestore.collection(`recordingList`).doc(recordingId);
  }

  deleteSong(songId: string): Promise<void> {
    return this.firestore.doc(`songList/${songId}`).delete();
  }

  deleteRecording(recordingId: string): Promise<void> {
    return this.firestore.doc(`recordingList/${recordingId}`).delete();
  }
}
