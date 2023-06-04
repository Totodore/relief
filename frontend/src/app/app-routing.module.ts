import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConseilsComponent } from './components/conseils/conseils.component';
import { ForumComponent } from './components/forum/forum.component';
import { MedecinPageComponent } from './components/medecin-page/medecin-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { FirstAidPageComponent } from './components/first-aid-page/first-aid-page.component';
import { FullScreenMapComponent } from './components/full-screen-map/full-screen-map.component';
import { AllConseilsComponent } from './components/all-conseils/all-conseils.component';

const routes: Routes = [
  {
    path: "",
    component: ConseilsComponent
  },
  {
    path: "forum",
    component: ForumComponent
  },
  {
    path: "medecin",
    component: MedecinPageComponent
  }, 
  {
    path: "profile",
    component: ProfilePageComponent
  },
  {
    path: "help",
    component: FirstAidPageComponent
  },
  {
    path: "medecin/map",
    component: FullScreenMapComponent
  }, 
  {
    path: "conseils",
    component: AllConseilsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
