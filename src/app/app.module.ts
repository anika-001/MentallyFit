import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule} from '@angular/cdk/drag-drop';
import {MatTooltipModule} from '@angular/material/tooltip';

import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaferoomComponent } from './saferoom/saferoom.component';

import { NavbarComponent } from './navbar/navbar.component';

import { ForumComponent } from './forum/forum.component';

import { BeachComponent } from './beach/beach.component';
import { ForestComponent } from './forest/forest.component';
import { MallComponent } from './mall/mall.component';

import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { FilldbComponent } from './filldb/filldb.component';

import { HouseComponent } from './house/house.component';

import { TempleinjapanComponent } from './templeinjapan/templeinjapan.component';
import { HttpClientModule } from '@angular/common/http';
import { IslandComponent } from './island/island.component';
import { MeditateComponent } from './meditate/meditate.component';
import { MyapirpComponent } from './myapirp/myapirp.component';
import { ChatroomComponent } from './chatroom/chatroom.component';


@NgModule({
  declarations: [
    AppComponent,
    SaferoomComponent,
    SigninComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    ForumComponent,
    ScoreboardComponent,
    BeachComponent,
    ForestComponent,
    MallComponent,
    FilldbComponent,
    HouseComponent,
    TempleinjapanComponent,
    IslandComponent,
    MeditateComponent,
    MyapirpComponent,
    ChatroomComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    //FontAwesomeModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatSelectModule,
    MatGridListModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTooltipModule
  
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
