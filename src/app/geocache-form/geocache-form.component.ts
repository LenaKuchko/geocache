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

  constructor(private geoApiService: GeoApiService) { }

  ngOnInit() {
  }

  getGeocache(latitude, longitude){
      this.geoApiService.getAddressByLatitudeLongitude(latitude, longitude).subscribe(response => {
      console.log(response.json());
      let info = response.json();
      console.log(info.results[0]);

      let newGeocache = new Geocache (info.results[0].geometry.location.lat, info.results[0].geometry.location.lng, info.results[0].formatted_address)
      console.log(newGeocache);
      this.geocache = newGeocache;
      console.log(this.geocache);
      this.byCoords = true;
      console.log(this.byCoords)
    });
  }

  getGeocacheByAddress(address){
    this.geoApiService.getAddressByAddress(address).subscribe(response => {
    console.log(response.json());
    let info = response.json();
    console.log(info.results[0]);

    let newGeocache = new Geocache (info.results[0].geometry.location.lat, info.results[0].geometry.location.lng, info.results[0].formatted_address)
    console.log(newGeocache);
    this.geocache = newGeocache;
    console.log(this.geocache);
    this.byCoords = false;
  });
  }
}
