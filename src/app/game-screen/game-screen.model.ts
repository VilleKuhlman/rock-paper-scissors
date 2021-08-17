export type gameChoice = "rock" | "paper" | "scissors";

export interface GameScreen {
    readonly userChoice: gameChoice | "";
    readonly computerChoice: gameChoice | "";
    readonly userScore: number;
    readonly computerScore: number;
    readonly roundCount: number;
    readonly result: string;
  }