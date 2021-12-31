import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageGameComponent } from './page-game/page-game.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';

var routes: Routes = [
  {path: "", component: PageHomeComponent, pathMatch: "full"},
  {path: "game", component: PageGameComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageGameComponent,
    BoardComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
