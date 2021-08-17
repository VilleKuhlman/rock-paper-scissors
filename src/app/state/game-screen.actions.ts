import { createAction, props } from '@ngrx/store';
import { gameChoice } from '../game-screen/game-screen.model';

export const playRound = createAction(
  '[Game Screen] Play', props<{ userChoice: gameChoice, computerChoice: gameChoice, userRoundScore: number, computerRoundScore: number}>()
);

export const resetScores = createAction(
  '[Game Screen] Reset'
);