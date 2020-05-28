import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
	providedIn: 'root'
})
export class MapDataService {

	constructor( ) { }

	getContents(path) {
		return path.map(response => JSON.stringify(response));
	}

}
