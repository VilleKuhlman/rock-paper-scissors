import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { gameChoice, GameScreen } from './game-screen.model';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class GameScreenComponent implements OnInit {

  @Input() gameScreen!: GameScreen | null;
  @Output() gameRound: EventEmitter<any> = new EventEmitter();
  @Output() resetScores: EventEmitter<any> = new EventEmitter();

  userChoiceInput: string = "";

  pointsTable = {
    rock : { scissors : 1, paper : 0, rock: 0 },
    paper : { rock : 1, scissors : 0, paper: 0 },
    scissors : { paper : 1, rock : 0, scissors: 0 }
  }

  get userChoice() {
    return this.gameScreen?.userChoice;
  }

   get computerChoice() {
    return this.gameScreen?.computerChoice;
  }

  get userScore() {
    return this.gameScreen?.userScore;
  }

  get computerScore() {
    return this.gameScreen?.computerScore;
  }

  get roundCount() {
    return this.gameScreen?.roundCount;
  }

  get result() {
    return this.gameScreen?.result;
  }


  constructor() { }

  ngOnInit(): void { }

  play(userChoice: string): void {

    const computerChoice: gameChoice = Object.keys(this.pointsTable)[Math.floor(Math.random() * (3 - 0))] as gameChoice;
    const userRoundScore: number = this.calculatePoints(userChoice as gameChoice, computerChoice);
    const computerRoundScore: number = this.calculatePoints(computerChoice, userChoice as gameChoice);

    this.gameRound.emit({userChoice, computerChoice, userRoundScore, computerRoundScore});
  }

  onKey(event: any) {
    this.userChoiceInput = event.target.value.toString();
  }

  reset(): void {
    this.resetScores.emit();
  }

  calculatePoints(x:gameChoice, y:gameChoice): number {

    return this.pointsTable[x][y];

  }

}