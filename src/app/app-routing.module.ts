import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CronosComponent } from './cronos/cronos.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { ArtGaleryComponent } from './art-galery/art-galery.component';
import { AylinWoodsComponent } from './aylin-woods/aylin-woods.component';
import { ProfileComponent } from './profile/profile.component';
import { BalletComponent } from './ballet/ballet.component';

const routes: Routes = [
	{ path: '', redirectTo: '/cronos', pathMatch: 'full' },
	{ path: 'cronos', component: CronosComponent },
	{ path: 'apartment', component: ApartmentComponent },
	{ path: 'art-galery', component: ArtGaleryComponent },
	{ path: 'aylin-woods', component: AylinWoodsComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'ballet', component: BalletComponent },
];


@NgModule({
  declarations: [],
  imports: [
		RouterModule.forRoot(routes),
    // CommonModule
  ],
	exports: [RouterModule]
})
export class AppRoutingModule { }
