import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { environment } from '../../environments/environment';
import { AuthService } from '../providers/auth-service.service';
import { ActionSheetController, LoadingController, ToastController } from '@ionic/angular';

const AVATAR_URL = environment.API_URL + '/useravatar';

interface AuthUser {
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  role?: {
    name: string;
    code: string;
    color: string;
  };
  avatar?: string;
}

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss']
})
export class UserprofilePage implements OnInit {
  authUser: AuthUser;

  fileUrl: any = null;
  respData: any;
  image: any = '';
  imageData: any = '';

  saving: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private crop: Crop,
    private camera: Camera,
    private transfer: FileTransfer,
    private actionSheetController: ActionSheetController,
    private loadingController: LoadingController,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.authUser = this.authService.getLoggedUser();
    if (this.authUser.avatar) {
      this.authUser.avatar = environment.BASE_URL + '/avatars/' + this.authUser.avatar;
    }
  }

  ionViewWillEnter() {
    this.authUser = this.authService.getLoggedUser();
    if (this.authUser.avatar) {
      this.authUser.avatar = environment.BASE_URL + '/avatars/' + this.authUser.avatar;
    }
  }

  pop() {
    this.router.navigateByUrl('coaching-paths');
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.openCam();
          }
        },
        {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            this.gallery();
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  openCam() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        //alert(imageData)
        this.crop.crop(imageData, { quality: 100 }).then(
          (newImage) => {
            this.fileUrl = (<any>window).Ionic.WebView.convertFileSrc(newImage);
            this.imageData = newImage;
            this.image = newImage;
          },
          (error) => console.error('Error cropping image', error)
        );
      },
      (err) => {
        // Handle error
        alert('error ' + JSON.stringify(err));
      }
    );
  }

  async upload() {
    this.saving = true;
    console.log('new image path is: ' + this.image);
    const fileTransfer: FileTransferObject = this.transfer.create();
    const uploadOpts: FileUploadOptions = {
      fileKey: 'avatar',
      fileName: 'avatar.jpeg',
      params: {
        userId: this.authUser.id
      },
      headers: {
        Authorization: localStorage.getItem('token')
      }
    };

    fileTransfer.upload(this.image, AVATAR_URL, uploadOpts).then(
      async (data) => {
        console.log(data);
        this.saving = false;
        this.authUser.avatar = this.fileUrl;
        let toast = await this.toastController.create({
          message: 'Immagine salvata con successo.',
          duration: 1500
        });
        toast.present();
      },
      (err) => {
        this.saving = false;
        console.log(err);
      }
    );
  }

  gallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        //alert(imageData)
        this.crop.crop(imageData, { quality: 100 }).then(
          (newImage) => {
            this.fileUrl = (<any>window).Ionic.WebView.convertFileSrc(newImage);
            this.imageData = newImage;
            this.image = newImage;
          },
          (error) => console.error('Error cropping image', error)
        );
      },
      (err) => {
        // Handle error
        alert('error ' + JSON.stringify(err));
      }
    );
  }
}
