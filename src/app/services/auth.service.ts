import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(
    email:string,
    password:string
  ): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email,
    password); 
  }

  singupUser(email: string, password: string): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  }

  rpassword(email:string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email)
  }

  logoutUser():Promise<void> {
    return firebase.auth().signOut()
  }

}
