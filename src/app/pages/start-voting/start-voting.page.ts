import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Plugins, CameraResultType } from '@capacitor/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
const { Camera } = Plugins;

@Component({
  selector: 'app-start-voting',
  templateUrl: './start-voting.page.html',
  styleUrls: ['./start-voting.page.scss'],
})
export class StartVotingPage implements OnInit {
  question: string = '';
  img: any = null;
  imgPath: any = null;

  constructor(private modalController: ModalController, private sanitizer: DomSanitizer,
    private api: ApiService, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async addImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    this.img = this.sanitizer.bypassSecurityTrustResourceUrl(image.webPath);
    this.imgPath = image.webPath;
  }

  startVoting() {
    this.api.startVoting(this.imgPath, this.question).subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Your voting was saved.',
        duration: 2000
      });
      await toast.present();
      this.close(true);
    });
  }

  close(reload = false) {
    this.modalController.dismiss({ reload });
  }

}
