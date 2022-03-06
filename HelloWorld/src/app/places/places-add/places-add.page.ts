import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceService } from '../place.service';
@Component({
  selector: 'app-places-add',
  templateUrl: './places-add.page.html',
  styleUrls: ['./places-add.page.scss'],
})
export class PlacesAddPage implements OnInit {

  constructor(private placesService: PlaceService, private router: Router) { }

  ngOnInit() {
  }

  saveNewPlace(title, imageURL){
    this.placesService.addPlaces(title.value, imageURL.value);
    this.router.navigate(['/places']);
  }
}
