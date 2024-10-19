import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /* variables */
  email: string = "";
  pass: string = "";
  userType: string = ""; // Añadido para manejar el tipo de usuario
  errorMessage: string = "";

  /* Usuario 1 (Alumno) */
  userValido1 = {
    email: 'fel.quezadar@duocuc.cl',
    pass: 'Pass123'
  }

  /* Usuario 2 (Profesor) */
  userValido2 = {
    email: 'ign.figueroav@duocuc.cl',
    pass: 'Pass1234'
  }

  constructor(
    private alertCtrl: AlertController,
    private router: Router,
    private loadingCtrl: LoadingController  // Añade LoadingController
  ) {}

  /* Lógica de login() */
  async login() {
    /* Datos en blanco */
    if (this.email === "" || this.pass === "" || this.userType === "") {
      this.errorMessage = 'Por favor, ingrese todos los datos antes de iniciar sesión';
      return;
    }

    /* Validación Usuario 1 (Alumno) */
    if (this.email === this.userValido1.email && this.pass === this.userValido1.pass && this.userType === 'Alumno') {
      this.errorMessage = "";
      const alert = await this.alertCtrl.create({
        header: 'Login exitoso',
        message: 'Bienvenido Alumno',
        buttons: ['OK']
      });
      await alert.present();

      // Muestra el indicador de carga
      const loading = await this.loadingCtrl.create({
        message: 'Cargando...',
        duration: 1000 // Tiempo en milisegundos (1 segundo)
      });
      await loading.present();

      // Redirige a la página de bienvenida después de que el indicador de carga se haya ocultado
      setTimeout(() => {
        this.router.navigate(['/bienvenido'], { queryParams: { userName: this.email.split('@')[0] } });
      }, 1000); // Debe coincidir con la duración del indicador de carga
    } 
    /* Validación Usuario 2 (Profesor) */
    else if (this.email === this.userValido2.email && this.pass === this.userValido2.pass && this.userType === 'Profesor') {
      this.errorMessage = "";
      const alert = await this.alertCtrl.create({
        header: 'Login exitoso',
        message: 'Bienvenido Profesor',
        buttons: ['OK']
      });
      await alert.present();

      // Muestra el indicador de carga
      const loading = await this.loadingCtrl.create({
        message: 'Cargando...',
        duration: 1000 // Tiempo en milisegundos (1 segundo)
      });
      await loading.present();

      // Redirige a la página de bienvenida después de que el indicador de carga se haya ocultado
      setTimeout(() => {
        this.router.navigate(['/bienvenido'], { queryParams: { userName: this.email.split('@')[0] } });
      }, 1000); // Debe coincidir con la duración del indicador de carga
    } 
    else {
      /* Mensaje de error */
      this.errorMessage = 'Correo, contraseña o tipo de usuario incorrectos';
    }
  }

  /* Método para redirigir a la página forgot-pass */
  async goToForgotPass() {
    // Muestra el indicador de carga
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 3000 // 1000= 1 segundo)
    });
    await loading.present();

    // Redirige a la página de forgot-pass después de que el indicador de carga se haya ocultado
    setTimeout(() => {
      this.router.navigate(['/forgot-pass']);
    }, 3000); // Debe coincidir con la duración del indicador de carga
  }
}