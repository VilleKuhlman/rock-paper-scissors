import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { gameChoice, GameScreen } from './game-screen/game-screen.model';
import { AppState } from './state/app.state';
import { playRound, resetScores } from './state/game-screen.actions';
import { selectGameScreen } from './state/game-screen.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private readonly store: Store<AppState>) {}
    title = 'rock-paper-scissors';
    gameScreen$: Observable<GameScreen> = this.store.pipe(select(selectGameScreen));

    setGameScores (event: { userChoice: gameChoice, computerChoice: gameChoice, userRoundScore: number, computerRoundScore: number}){
      this.store.dispatch(playRound(event));
    }

    resetGame (){
      this.store.dispatch(resetScores());
    }

}
