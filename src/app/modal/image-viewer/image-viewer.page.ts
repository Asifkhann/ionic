import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.page.html',
  styleUrls: ['./image-viewer.page.scss'],
})
export class ImageViewerPage implements OnInit {
  @Input() image;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log('image url', this.image);
  }
  dismiss() {
    this.modalController.dismiss();
  }

}
