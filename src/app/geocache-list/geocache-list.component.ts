import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-geocache-list',
  templateUrl: './geocache-list.component.html',
  styleUrls: ['./geocache-list.component.css']
})
export class GeocacheListComponent implements OnInit {
  @Input() clildGeocache;
  @Input() clildByCoords;
  @Input() childApiResnonse;



  constructor() { }

  ngOnInit() {
  }

}
