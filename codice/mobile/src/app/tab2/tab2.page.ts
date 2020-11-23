import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  constructor(
    public toastController: ToastController,
    private statusBar: StatusBar) {}

  ngOnInit() {
    console.log('Started Tab 2 activity');
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  async btnClick(index) {
    console.log(index);
    const toast = await this.toastController.create({
    message: 'Card #' + index,
      duration: 2000
    });
    toast.present();
  }
}
