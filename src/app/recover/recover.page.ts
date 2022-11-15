import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {

  recoverForm: FormGroup
  constructor(private fb:FormBuilder, private as:AuthService,
    private router:Router, private ac:AlertController ) { 
      this.buildForm(); }

  resetPassword(event: Event): void {
    event.preventDefault();
    if(this.recoverForm.valid){
      const value = this.recoverForm.value;
      this.as.rpassword(value.email).then(
        async () => {
          const alert = await this.ac.create({
            message: "Revisa tu correo, que te enviamos el link para que cambies tu contraseña. ",
            buttons: [{text: 'OK', role: 'cancel', handler: ()=> {
              this.router.navigateByUrl('login');
            }, }, ],
          });
          await alert.present(); 
        },
          async ()=>{
            const errorAlert = await this.ac.create({
              message: "El usuario no existe. ",
              buttons: [{text: 'OK', role: 'cancel'}],
            });
            await errorAlert.present();
          }
      ); 
    } 
  }

  ngOnInit() {
  }

  buildForm() {
    this.recoverForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get emailField() { return this.recoverForm.get('email'); }

}
