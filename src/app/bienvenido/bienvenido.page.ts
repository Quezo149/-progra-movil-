import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Importa ActivatedRoute
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {

  userName: string = '';

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  goBack(){
    this.navCtrl.navigateBack('/home')
  }

  ngOnInit() {
    // Obtiene el parámetro 'userName' de la URL
    this.route.queryParams.subscribe(params => {
      this.userName = params['userName'] || 'Usuario';
    });
  }
}

