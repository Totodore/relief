import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConseilsComponent } from './components/conseils/conseils.component';
import { ForumComponent } from './components/forum/forum.component';
import { MedecinPageComponent } from './components/medecin-page/medecin-page.component';
import { FirstAidPageComponent } from './components/first-aid-page/first-aid-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MapComponent } from './components/map/map.component';
import { FullScreenMapComponent } from './components/full-screen-map/full-screen-map.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ForumCardComponent } from './components/forum-card/forum-card.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRippleModule } from '@angular/material/core';
import { ConseilCardComponent } from './components/conseil-card/conseil-card.component';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
import { AllConseilsComponent } from './components/all-conseils/all-conseils.component';
import { MatChipsModule } from '@angular/material/chips';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConseilsComponent,
    ForumComponent,
    MedecinPageComponent,
    FirstAidPageComponent,
    ProfilePageComponent,
    TitleComponent,
    CardComponent,
    MapComponent,
    FullScreenMapComponent,
    SearchBarComponent,
    ForumCardComponent,
    ConseilCardComponent,
    SubTitleComponent,
    AllConseilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule, 
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatRippleModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
