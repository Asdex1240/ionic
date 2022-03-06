import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Place } from '../place.model';
import {AlertController} from '@ionic/angular';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(private activatedRoute: ActivatedRoute, private placesService: PlaceService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>
      {
        //Redirect
        const recipeId = paramMap.get('placeId')
        this.place = this.placesService.getPlace(recipeId);
      })
  }
  async deletePlace(){
    const alertElement = await this.alertCtrl.create({
      header: 'Are you sure, you want to delete it?',
      buttons: [
        {
          text: 'Cancel',
          role:'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(['/places']);
          }
        }
      ]
    });
    await alertElement.present()
  }
}
