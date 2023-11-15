import { Component, OnInit } from '@angular/core';
import { DataService, item } from '../data.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorial4',
  templateUrl: './tutorial4.page.html',
  styleUrls: ['./tutorial4.page.scss'],
})
export class Tutorial4Page implements OnInit {
  constructor(
    public DataServ: DataService,
    public alertCtrl: AlertController,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {}

  //------------------------ALERT PART----------------------------------------

  alertButtons = ['From File', 'From Storage', 'Cancel'];

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Where to get data from?',
      message:
        'Where do you want to get data from? from file or local storage?',
      buttons: [
        {
          text: 'From File',
          handler: () => {
            this.getDataFromFile();
          },
        },
        {
          text: 'From Storage',
          handler: () => {
            this.getDataFromStorage();
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }

  getDataFromStorage() {
    this.DataServ.getDataFromFileButton = false;
    this.DataServ.getDataFromStorageButton = true;
  }
  getDataFromFile() {
    this.DataServ.getDataFromFileButton = true;
    this.DataServ.getDataFromStorageButton = false;
  }

  //----------------------------------------------------------------
}
