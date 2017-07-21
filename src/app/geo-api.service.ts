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
      // for(let result of response.json().hits) {
      //   geocache = new Geocache(result.recipe.label, caloriesPer, result.recipe.totalNutrients.CHOCDF.quantity, result.recipe.totalNutrients.FAT.quantity, result.recipe.totalNutrients.PROCNT.quantity, result.recipe.url, result.recipe.image)
      //   console.log(foundRecipe);
      // }
    });
  }
}
