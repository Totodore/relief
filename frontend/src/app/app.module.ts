import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompoTestComponent } from './components/compo-test/compo-test.component';
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
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MapComponent } from './components/map/map.component';
import { FullScreenMapComponent } from './components/full-screen-map/full-screen-map.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ForumCardComponent } from './components/forum-card/forum-card.component';





@NgModule({
  declarations: [
    AppComponent,
    CompoTestComponent,
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
    ForumCardComponent
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
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
