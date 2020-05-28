import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetContentMapComponent } from './components/get-content-map/get-content-map.component';

import { MapDataService } from './services/map-data.service';

@NgModule({
	declarations: [
		AppComponent,
		GetContentMapComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [
		MapDataService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
