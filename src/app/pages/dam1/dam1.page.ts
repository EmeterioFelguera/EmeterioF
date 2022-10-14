import { Component, OnInit, } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dam1',
  templateUrl: './dam1.page.html',
  styleUrls: ['./dam1.page.scss'],
})
export class Dam1Page implements OnInit {

  public toastController: ToastController

  constructor() { }
  check1 = true;
  check2 = true;
  check3 = false;
  check4 = true;
  check5 = false;


  ngOnInit() {

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000,
    });
    toast.present();
  }
}

