import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import {ModalController, ToastController} from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AppService } from '../app-service';
import { environment } from '../../environments/environment';
import { C } from '../const';
import {Observable} from 'rxjs';
import {ImageViewerPage} from '../modal/image-viewer/image-viewer.page';


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class NewsfeedPage implements OnInit {
  currentUser: any = null;
  newsitems: any = [];
  mainTitle: string = '';

  constructor(
    private appService: AppService,
    // private C: C,
    private nativeStorage: NativeStorage,
    private router: Router,
    public httpClient: HttpClient,
    public toastController: ToastController,
    private modalController: ModalController
  ) {
    appService.setTitle('Newsfeed');
    this.mainTitle = 'Newsfeed';

    this.nativeStorage.getItem('current_user').then(data => {
      this.currentUser = data;
      if ('facebook' == data.type) {
        const params = new HttpParams().set('accessToken', data.accessToken)
        const answer = this.httpClient.get(environment.newsitemsPath, { params: params })
        answer.subscribe(data => {
          if (data['newsitems']) {
            this.newsitems = data['newsitems'];
          }
        }, async error => {
          console.log('+++ error from m3 1-:', JSON.stringify(error))
          const toast = await this.toastController.create({
            message: 'The token has expired? Please login.',
            duration: 2000
          });
          toast.present();
        });
      }
    }, async error => {
      console.log('+++ newsfeed doesnt have current_user:', error);
      const toast = await this.toastController.create({
        message: 'You are not logged in - please login.',
        duration: 2000
      });
      toast.present();
    });

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
      // Instance of should be:
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  ngOnInit () {
    this.appService.currentMessage.subscribe( message => {
      console.log('+++ new message:', message)
      if (message == C.didLogin) {
        this.render();
      }
    });
  }

  render () {
    this.nativeStorage.getItem('current_user').then(data => {
      this.currentUser = data;
      if ('facebook' == data.type) {
        const params = new HttpParams().set('accessToken', data.accessToken)
        const answer = this.httpClient.get(environment.newsitemsPath, { params: params })
        answer.subscribe(data => {
          if (data['newsitems']) {
            this.newsitems = data['newsitems'];
          }
        }, async error => {
          console.log('+++ error from m3 1-:', JSON.stringify(error))
          const toast = await this.toastController.create({
            message: 'The token has expired? Please login.',
            duration: 2000
          });
          toast.present();
        });
      }
    }, async error => {
      console.log('+++ newsfeed doesnt have current_user:', error);
      const toast = await this.toastController.create({
        message: 'You are not logged in - please login.',
        duration: 2000
      });
      toast.present();
    });
  }

  ionViewDidLoad () {
    console.log('+++ newsfeed ionViewDidLoad');
  }
  async openImageViewer(url) {
    const modal = await this.modalController.create({
      component: ImageViewerPage,
      componentProps: {
        image: url
      }
    });
    return await modal.present();
  }



}


/**
  ionViewDidLoad
  ionViewWillEnter
  ionViewDidEnter
  ionViewWillLeave
  ionViewDidLeave
  ionViewWillUnload
  ionViewCanEnter
*/
