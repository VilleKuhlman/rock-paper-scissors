import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { gameScreenReducer } from './state/game-screen.recucer';
import { AppComponent } from './app.component';
import { GameScreenComponent } from './game-screen/game-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    GameScreenComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ gameScreen: gameScreenReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
