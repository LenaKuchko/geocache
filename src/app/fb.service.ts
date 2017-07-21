import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FbService {
  geocaches: FirebaseListObservable<any[]>;

  constructor(private angularFirebase: AngularFireDatabase) {
    this.geocaches = angularFirebase.list('geocaches');
  }
}
