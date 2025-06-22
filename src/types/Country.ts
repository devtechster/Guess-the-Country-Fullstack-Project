export interface Country {
  name: string;
  code: string;
  flag: string;
  region: string;
}

export interface GameState {
  currentQuestion: number;
  score: number;
  totalQuestions: number;
  timeLeft: number;
  isGameActive: boolean;
  selectedCategory: string;
  streak: number;
  bestStreak: number;
}

export interface Question {
  country: Country;
  options: string[];
  correctAnswer: string;
}

export type CategoryType = 'world' | 'europe' | 'asia-pacific' | 'africa' | 'latin-america' | 'south-asia' | 'middle-east';