import { Component, OnInit } from '@angular/core';
import { GeoApiService } from '../geo-api.service';

@Component({
  selector: 'app-geocache-form',
  templateUrl: './geocache-form.component.html',
  styleUrls: ['./geocache-form.component.css'],
  providers: [GeoApiService]
})
export class GeocacheFormComponent implements OnInit {

  constructor(private geoApiService: GeoApiService) { }

  ngOnInit() {
  }

  getGeocache(latitude, longitude){
    this.geoApiService.getAddressByLatitudeLongitude(latitude, longitude);
  }

}
