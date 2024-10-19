import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {

  email: string = "";
  newPass: string = "";
  confirmPass: string = "";
  errorMessage: string = "";
  successMessage: string = "";

  /* Usuarios definidos */
  userValido1 = {
    email: 'fel.quezadar@duocuc.cl',
    pass: 'Pass123'
  }

  userValido2 = {
    email: 'ign.figueroav@duocuc.cl',
    pass: 'Pass1234'
  }

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private navCtrl: NavController
  ) {}

  goBack(){
    this.navCtrl.navigateBack('/home');
  }

  ngOnInit() {}

  /* Método para cambiar la contraseña */
  async changePassword() {
    /* Verificar que el email está ingresado */
    if (this.email === "" || this.newPass === "" || this.confirmPass === "") {
      this.errorMessage = 'Por favor, complete todos los campos';
      return;
    }

    /* Verificar que las contraseñas coincidan */
    if (this.newPass !== this.confirmPass) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    // Mostrar la animación de carga
    const loading = await this.loadingCtrl.create({
      message: 'Cambiando contraseña...',
      spinner: 'crescent',
      duration: 3000
    });
    await loading.present();

    /* Simulación de cambio de contraseña */
    setTimeout(async () => {
      await loading.dismiss(); 

      /* Cambiar contraseña para el Usuario 1 (Alumno) */
      if (this.email === this.userValido1.email) {
        this.userValido1.pass = this.newPass;
        this.errorMessage = '';
        this.successMessage = 'Contraseña cambiada con éxito para Alumno';
        
        const alert = await this.alertCtrl.create({
          header: 'Éxito',
          message: 'Contraseña cambiada con éxito para Alumno',
          buttons: ['OK']
        });
        await alert.present();

        // Espera 2 segundos y redirige a la página de inicio
        setTimeout(() => {
          this.router.navigate(['/home']);  // Redirigir a la página de inicio
        }, 2000);
      } 
      /* Cambiar contraseña para el Usuario 2 (Profesor) */
      else if (this.email === this.userValido2.email) {
        this.userValido2.pass = this.newPass;
        this.errorMessage = '';
        this.successMessage = 'Contraseña cambiada con éxito para Profesor';
        
        const alert = await this.alertCtrl.create({
          header: 'Éxito',
          message: 'Contraseña cambiada con éxito para Profesor',
          buttons: ['OK']
        });
        await alert.present();

        // Espera 2 segundos y redirige a la página de inicio
        setTimeout(() => {
          this.router.navigate(['/home']);  // Redirigir a la página de inicio
        }, 2000);
      } 
      /* Si el correo no coincide con ningún usuario */
      else {
        this.errorMessage = 'El correo no coincide con ningún usuario';
        this.successMessage = '';
      }
    }, 3000); // Simula una espera de 3 segundos (la duración de la animación)
  }
}
