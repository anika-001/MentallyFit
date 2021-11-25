import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SaferoomComponent } from './saferoom/saferoom.component';
import { Game1Component } from './game1/game1.component';
import { Game2createroomComponent } from './game2createroom/game2createroom.component';
import { ComicComponent } from './comic/comic.component';
import { Game2Component } from './game2/game2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BeachComponent } from './beach/beach.component';
import { ForestComponent } from './forest/forest.component';
import { MallComponent } from './mall/mall.component';
import { ForumComponent } from './forum/forum.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ComicroomComponent } from './comicroom/comicroom.component';
import { AddimagesfsComponent } from './addimagesfs/addimagesfs.component';
import { FilldbComponent } from './filldb/filldb.component';
import { HouseComponent } from './house/house.component';
import { BoardComponent } from './board/board.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { PlantComponent } from './plant/plant.component';
import { TorchComponent } from './torch/torch.component';
import { EscaperoomComponent } from './escaperoom/escaperoom.component';
import { ToysComponent } from './toys/toys.component';
import { RoomComponent } from './room/room.component';
import { MiddleComponent } from './middle/middle.component';
import { ReachedComponent } from './reached/reached.component';
import { TempleinjapanComponent } from './templeinjapan/templeinjapan.component';
import { AddeventComponent } from './addevent/addevent.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { IslandComponent } from './island/island.component';
import { MeditateComponent } from './meditate/meditate.component';
import { FunActivityComponent } from './fun-activity/fun-activity.component';
import { EventsComponent } from './events/events.component';

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
    path: 'game1',
    component: Game1Component
  },
  {
    path: 'createroom',
    component: Game2createroomComponent
  },
  {
    path:'comic',
    component:ComicComponent
  },
  {
    path: 'jeopardy',
    component: Game2Component
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
    path: 'board',
    component: BoardComponent
  },
  {
    path: 'plant',
    component: PlantComponent
  },
  {
    path: 'torch',
    component: TorchComponent
  },
  {
    path: 'puzzle',
    component: PuzzleComponent
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
    path: 'activities',
    component: ActivitiesComponent
  },
  {
    path: 'comicroom',
    component: ComicroomComponent
  },
  {
    path: 'addimages',
    component: AddimagesfsComponent
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
    path: 'escaperoom',
    component: EscaperoomComponent
  },
  {
    path: 'toys',
    component: ToysComponent
  },
  {
    path: 'room',
    component: RoomComponent
  },
  {
    path: 'middle',
    component: MiddleComponent
  },
  {
    path: 'reachedhome',
    component: ReachedComponent
    
  },
  {
    path: "events",
    component:EventsComponent
  },
  {
    path: "addevent",
    component: AddeventComponent
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
    path: "funactivity",
    component: FunActivityComponent
  },
  {
    path: "temple",
    component: TempleinjapanComponent
  },
  {
    path: "events/hashtag",
   component:HashtagComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
