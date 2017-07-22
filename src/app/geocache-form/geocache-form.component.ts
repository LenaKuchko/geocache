import { Component, OnInit } from '@angular/core';
import { GeoApiService } from '../geo-api.service';
import { Geocache } from '../geocache';

@Component({
  selector: 'app-geocache-form',
  templateUrl: './geocache-form.component.html',
  styleUrls: ['./geocache-form.component.css'],
  providers: [GeoApiService]
})
export class GeocacheFormComponent implements OnInit {

  geocache: Geocache;
  byCoords: boolean = false;
  apiResponse: boolean;

  constructor(private geoApiService: GeoApiService) { }

  ngOnInit() {
  }

  getGeocache(latitude, longitude){
      this.geoApiService.getAddressByLatitudeLongitude(latitude, longitude).subscribe(response => {
      let info = response.json();

      console.log("info.results.length");
      info.results.length>0 ? this.apiResponse = false : this.apiResponse = true;
      let newGeocache = new Geocache (info.results[0].geometry.location.lat, info.results[0].geometry.location.lng, info.results[0].formatted_address)
      this.geocache = newGeocache;
      this.byCoords = true;
    });
  }

  getGeocacheByAddress(address){
    this.geoApiService.getAddressByAddress(address).subscribe(response => {;
    let info = response.json();
    
    let newGeocache = new Geocache (info.results[0].geometry.location.lat, info.results[0].geometry.location.lng, info.results[0].formatted_address)
    this.geocache = newGeocache;
    this.byCoords = false;
  });
  }
}
