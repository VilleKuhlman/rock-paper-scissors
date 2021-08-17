import { createReducer, on, Action } from '@ngrx/store';
import { GameScreen } from '../game-screen/game-screen.model';
import { playRound, resetScores } from './game-screen.actions';

export const initialState: GameScreen = {
  userChoice: "",
  computerChoice: "",
  userScore: 0,
  computerScore: 0,
  roundCount: 0,
  result : ""
};

export const gameScreenReducer = createReducer(
  initialState,

  on(playRound, (state, { userChoice, computerChoice, userRoundScore, computerRoundScore }) => ({
    userChoice: userChoice, 
    computerChoice:computerChoice, 
    userScore: state.userScore + userRoundScore, 
    computerScore: state.computerScore + computerRoundScore, 
    roundCount: state.roundCount + 1,
    result: (state.userScore + userRoundScore) == (state.computerScore + computerRoundScore) ? "Tie" : (state.userScore + userRoundScore) > (state.computerScore + computerRoundScore) ? "User Wins" : "Computer Wins"
  })),

  on(resetScores, state => ({ userChoice: "", computerChoice: "", userScore: 0, computerScore: 0, roundCount: 0, result: "" })),
);



