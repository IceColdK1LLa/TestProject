import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { ArtGaleryComponent } from './art-galery/art-galery.component';
import { AylinWoodsComponent } from './aylin-woods/aylin-woods.component';
import { ProfileComponent } from './profile/profile.component';
import { CronosComponent } from './cronos/cronos.component';
import { AppRoutingModule } from './app-routing.module';
import { BalletComponent } from './ballet/ballet.component';
@NgModule({
  declarations: [
		AppComponent,
		ApartmentComponent,
		ArtGaleryComponent,
		AylinWoodsComponent,
		ProfileComponent,
		CronosComponent,
		BalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
