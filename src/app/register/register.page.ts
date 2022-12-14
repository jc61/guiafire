import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup
  constructor(private formBuilder:FormBuilder, private authService:AuthService,
    private router:Router, private alertController:AlertController ) { 
      this.buildForm(); }

  ngOnInit() {
  }

  async signupUser(event: Event): Promise<void> {
    event.preventDefault();
    if(this.registerForm.valid){
      const value = this.registerForm.value;
      this.authService.signupUser(value.email, value.password).then(()=>{
        this.router.navigateByUrl('login');
      }, async error=>{
        const alert = await this.alertController.create({
          message: error.message, buttons: [{text: 'OK', role: 'cancel'}],
        });
        await alert.present();
      })
    }
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength]]
    });
  }

  get emailField() { return this.registerForm.get('email'); }

  get passField() { return this.registerForm.get('password'); }

}
