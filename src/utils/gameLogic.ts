import { Country, Question } from '../types/Country';
import { generateOptions, shuffleArray } from './countries';

export function generateQuestions(countries: Country[], count: number): Question[] {
  if (countries.length < 4) return [];
  
  const shuffledCountries = shuffleArray(countries);
  const selectedCountries = shuffledCountries.slice(0, count);
  
  return selectedCountries.map(country => ({
    country,
    options: generateOptions(country.name, countries),
    correctAnswer: country.name
  }));
}

export function calculateScore(timeLeft: number, isCorrect: boolean, streak: number): number {
  if (!isCorrect) return 0;
  
  const baseScore = 100;
  const timeBonus = Math.floor(timeLeft / 2);
  const streakBonus = Math.min(streak * 10, 100);
  
  return baseScore + timeBonus + streakBonus;
}

export function getScoreColor(score: number, maxScore: number): string {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 80) return 'text-green-600';
  if (percentage >= 60) return 'text-yellow-600';
  if (percentage >= 40) return 'text-orange-600';
  return 'text-red-600';
}

export function getPerformanceMessage(score: number, maxScore: number): string {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 90) return 'Outstanding! 🏆';
  if (percentage >= 80) return 'Excellent! 🌟';
  if (percentage >= 70) return 'Great job! 👏';
  if (percentage >= 60) return 'Good work! 👍';
  if (percentage >= 50) return 'Not bad! 😊';
  return 'Keep practicing! 💪';
}

export const GAME_CONFIG = {
  QUESTIONS_PER_GAME: 10,
  TIME_PER_QUESTION: 30
};