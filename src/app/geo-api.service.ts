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
    )
  }
}
