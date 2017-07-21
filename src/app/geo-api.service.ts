import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { googleApiKey } from './api-keys';
import { Geocache } from './geocache';

@Injectable()
export class GeoApiService {

  constructor(private http: Http) { }

  getAddressByLatitudeLongitude(lat: string, lan: string) {
    return this.http.get(
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lan + "&key=" + googleApiKey
      // "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key="+googleApiKey
    ).subscribe(response => {
      let geocache: Geocache;
      console.log(response.json());
      let info = response.json();
      console.log(info.results[0]);
      //49.6021345
      //34.4870274
      // console.log(info.results[0].geometry.location.lat);
      // console.log(info.results[0].geometry.location.lng);
      // console.log(info.results[0].formatted_address);

      let newGeocache = new Geocache (info.results[0].geometry.location.lat, info.results[0].geometry.location.lng, info.results[0].formatted_address)
      console.log(newGeocache);
    });
  }
}
