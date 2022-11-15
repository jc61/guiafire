import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/compat/auth';
import { RegisterPageRoutingModule } from './register-routing.module';
import { firebaseConfig } from '../credenciales';
import { RegisterPage } from './register.page';
import firebase from 'firebase/compat/app';
firebase.initializeApp(firebaseConfig);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireAuthModule,
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
