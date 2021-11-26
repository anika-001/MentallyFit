import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SaferoomComponent } from './saferoom/saferoom.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BeachComponent } from './beach/beach.component';
import { ForestComponent } from './forest/forest.component';
import { MallComponent } from './mall/mall.component';
import { ForumComponent } from './forum/forum.component';
import { FilldbComponent } from './filldb/filldb.component';
import { HouseComponent } from './house/house.component';

import { TempleinjapanComponent } from './templeinjapan/templeinjapan.component';
import { IslandComponent } from './island/island.component';
import { MeditateComponent } from './meditate/meditate.component';
import { MyapirpComponent } from './myapirp/myapirp.component';
import { ChatroomComponent } from './chatroom/chatroom.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: '',
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: "saferoom",
    component: SaferoomComponent

  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'beach',
    component: BeachComponent
  },

  {
    path: 'forest',
    component: ForestComponent
  },
  {
    path: 'mall',
    component: MallComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'house',
    component: HouseComponent
  },
  {
    path: 'try',
    component: FilldbComponent
  },
  {
    path: "island",
    component: IslandComponent
  },
  {
    path: "meditate",
    component: MeditateComponent
  },
  {
    path: "temple",
    component: TempleinjapanComponent
  },
  {
    path: "myapi1",
    component: MyapirpComponent
  },
  {
    path: "chat",
    component: ChatroomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
