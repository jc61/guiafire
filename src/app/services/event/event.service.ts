import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthService } from '../auth.service';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public eventId: string

  constructor(
    public aventListRef: AngularFirestore,
    private authService: AuthService,
  ) { }

  async createEvent(
    eventName: string,
    eventDate: string,
    eventPrice: number,
    eventCost: number,
  ): Promise<DocumentReference> {
    const user: firebase.User = await this.authService.getUser()
    return this.aventListRef.collection(`userProfile/${user.uid}/eventList`)
    .add({
      name: eventName,
      date: eventDate,
      price: eventPrice * 1,
      cost: eventCost * 1,
      revenue: eventCost * -1,
    })
  }

  getEventList() {
    const user: firebase.User = this.authService.getUser();
    const ref = this.aventListRef.collection(`userProfile/${user.uid}/eventList`)
    return ref.valueChanges({idField: 'id'})
  }

  getEventDetail(eventId: string): AngularFirestoreDocument {
    this.eventId = eventId
    const user: firebase.User = this.authService.getUser();
    return this.aventListRef.collection(`userProfile/${user.uid}/eventList/`).doc(eventId)
  }

  async addAttendees(
    attendeeName: string,
  ): Promise<DocumentReference> {
    const user: firebase.User = await this.authService.getUser()
    return this.aventListRef.collection(`userProfile/${user.uid}/eventList/${this.eventId}/attendeeList`)
    .add({
      name: attendeeName,
    })
  }

  getAttendeeList(eventId: string) {
    const user: firebase.User = this.authService.getUser();
    return this.aventListRef.collection(`userProfile/${user.uid}/eventList/${eventId}/attendeeList`).valueChanges()
  }

  getAsistentesList() {
    const user: firebase.User = this.authService.getUser();
    const ref = this.aventListRef.collection(`userProfile/${user.uid}/eventList/${this.eventId}/attendeeList`)
    return ref.valueChanges({idField: 'id'})
  }

}
