import { Component, OnInit, Input } from '@angular/core';
import { MapDataService } from './../../services/map-data.service';

@Component({
  selector: 'get-content-map',
  templateUrl: './get-content-map.component.html',
  styleUrls: ['./get-content-map.component.css']
})
export class GetContentMapComponent implements OnInit {

  @Input() id: string;

  private dataList;

  constructor( mdService: MapDataService) {

    this.dataList = mdService.getContents([{"id": 1, "name": "test"}]);

  }

  ngOnInit(): void {
    var elem = document.getElementById(this.id);
    elem.innerHTML = this.dataList;
  }

}
