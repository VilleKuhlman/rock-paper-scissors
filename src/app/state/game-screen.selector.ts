import { createFeatureSelector } from '@ngrx/store';
import { GameScreen } from '../game-screen/game-screen.model';
import { AppState } from './app.state';
      
export const selectGameScreen = createFeatureSelector<AppState, GameScreen>('gameScreen');