import React, { useState, useEffect, useCallback } from 'react';
import { 
  Flag, 
  Clock, 
  Target, 
  RotateCcw, 
  Trophy, 
  Home,
  Zap,
  Award
} from 'lucide-react';
import { Country, Question, GameState, CategoryType } from '../types/Country';
import { getCountriesByCategory, CATEGORIES } from '../utils/countries';
import { generateQuestions, calculateScore, getScoreColor, getPerformanceMessage, GAME_CONFIG } from '../utils/gameLogic';

interface GameScreenProps {
  category: CategoryType;
  onBackToCategories: () => void;
}

export default function GameScreen({ category, onBackToCategories }: GameScreenProps) {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    score: 0,
    totalQuestions: GAME_CONFIG.QUESTIONS_PER_GAME,
    timeLeft: GAME_CONFIG.TIME_PER_QUESTION,
    isGameActive: false,
    selectedCategory: category,
    streak: 0,
    bestStreak: 0
  });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<Country[]>([]);

  const currentQuestion = questions[gameState.currentQuestion];
  const maxScore = GAME_CONFIG.QUESTIONS_PER_GAME * (100 + (GAME_CONFIG.TIME_PER_QUESTION / 2) + 100);

  const initializeGame = useCallback(async () => {
    setLoading(true);
    try {
      const categoryCountries = await getCountriesByCategory(category);
      setCountries(categoryCountries);
      
      if (categoryCountries.length < 4) {
        console.error('Not enough countries in category');
        return;
      }

      const gameQuestions = generateQuestions(categoryCountries, GAME_CONFIG.QUESTIONS_PER_GAME);
      setQuestions(gameQuestions);
      
      setGameState(prev => ({
        ...prev,
        isGameActive: true,
        currentQuestion: 0,
        score: 0,
        timeLeft: GAME_CONFIG.TIME_PER_QUESTION,
        streak: 0
      }));
      
      setSelectedAnswer('');
      setShowResult(false);
    } catch (error) {
      console.error('Error initializing game:', error);
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (gameState.isGameActive && gameState.timeLeft > 0 && !showResult) {
      timer = setTimeout(() => {
        setGameState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
      }, 1000);
    } else if (gameState.timeLeft === 0 && !showResult) {
      handleAnswer('');
    }

    return () => clearTimeout(timer);
  }, [gameState.timeLeft, gameState.isGameActive, showResult]);

  const handleAnswer = (answer: string) => {
    if (showResult || !currentQuestion) return;

    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setSelectedAnswer(answer);
    setShowResult(true);

    const newStreak = correct ? gameState.streak + 1 : 0;
    const scoreGained = calculateScore(gameState.timeLeft, correct, gameState.streak);
    
    setGameState(prev => ({
      ...prev,
      score: prev.score + scoreGained,
      streak: newStreak,
      bestStreak: Math.max(prev.bestStreak, newStreak),
      isGameActive: false
    }));
  };

  const nextQuestion = () => {
    if (gameState.currentQuestion + 1 >= questions.length) {
      // Game finished
      setGameState(prev => ({ ...prev, isGameActive: false }));
      return;
    }

    setGameState(prev => ({
      ...prev,
      currentQuestion: prev.currentQuestion + 1,
      timeLeft: GAME_CONFIG.TIME_PER_QUESTION,
      isGameActive: true
    }));
    
    setSelectedAnswer('');
    setShowResult(false);
    setIsCorrect(false);
  };

  const isGameFinished = gameState.currentQuestion >= questions.length - 1 && showResult;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <Flag className="w-16 h-16 text-blue-400 animate-pulse mx-auto mb-4" />
          <p className="text-white text-xl">Loading {CATEGORIES[category]?.name} flags...</p>
        </div>
      </div>
    );
  }

  if (isGameFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Game Complete!</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-2xl p-6">
                <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-blue-200 text-sm">Final Score</p>
                <p className={`text-3xl font-bold ${getScoreColor(gameState.score, maxScore)}`}>
                  {gameState.score}
                </p>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6">
                <Zap className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <p className="text-blue-200 text-sm">Best Streak</p>
                <p className="text-3xl font-bold text-orange-400">{gameState.bestStreak}</p>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6">
                <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-blue-200 text-sm">Accuracy</p>
                <p className="text-3xl font-bold text-purple-400">
                  {Math.round((gameState.score > 0 ? gameState.score / maxScore : 0) * 100)}%
                </p>
              </div>
            </div>

            <p className="text-2xl text-white mb-8">
              {getPerformanceMessage(gameState.score, maxScore)}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={initializeGame}
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Play Again
              </button>
              
              <button
                onClick={onBackToCategories}
                className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <Flag className="w-16 h-16 mx-auto mb-4 text-red-400" />
          <p className="text-xl">Error loading questions. Please try again.</p>
          <button
            onClick={onBackToCategories}
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition-colors"
          >
            Back to Categories
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <div className="flex items-center space-x-6">
            <button
              onClick={onBackToCategories}
              className="text-white hover:text-blue-200 transition-colors"
            >
              <Home className="w-6 h-6" />
            </button>
            
            <div className="text-white">
              <h1 className="text-2xl font-bold">{CATEGORIES[category]?.name} Flags</h1>
              <p className="text-blue-200">Question {gameState.currentQuestion + 1} of {gameState.totalQuestions}</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {gameState.streak > 0 && (
              <div className="flex items-center bg-orange-500/20 px-4 py-2 rounded-xl">
                <Zap className="w-5 h-5 text-orange-400 mr-2" />
                <span className="text-orange-400 font-semibold">{gameState.streak}</span>
              </div>
            )}
            
            <div className="flex items-center bg-green-500/20 px-4 py-2 rounded-xl">
              <Target className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-400 font-semibold">{gameState.score}</span>
            </div>
            
            <div className={`flex items-center px-4 py-2 rounded-xl ${
              gameState.timeLeft <= 10 ? 'bg-red-500/20' : 'bg-blue-500/20'
            }`}>
              <Clock className={`w-5 h-5 mr-2 ${
                gameState.timeLeft <= 10 ? 'text-red-400' : 'text-blue-400'
              }`} />
              <span className={`font-semibold ${
                gameState.timeLeft <= 10 ? 'text-red-400' : 'text-blue-400'
              }`}>
                {gameState.timeLeft}s
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Which country does this flag belong to?</h2>
            
            {/* Flag Display */}
            <div className="relative inline-block mb-6">
              <img
                src={currentQuestion.country.flag}
                alt="Country flag"
                className="w-80 h-56 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "w-full p-6 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 ";
              
              if (showResult) {
                if (option === currentQuestion.correctAnswer) {
                  buttonClass += "bg-green-500 border-green-400 text-white shadow-lg shadow-green-500/25";
                } else if (option === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
                  buttonClass += "bg-red-500 border-red-400 text-white shadow-lg shadow-red-500/25";
                } else {
                  buttonClass += "bg-white/10 border-white/20 text-white/60";
                }
              } else {
                buttonClass += "bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40 text-white hover:shadow-lg";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={showResult}
                  className={buttonClass}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Result Display */}
          {showResult && (
            <div className="mt-8 text-center">
              <div className={`inline-flex items-center px-8 py-4 rounded-2xl font-bold text-xl mb-6 ${
                isCorrect 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/40' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/40'
              }`}>
                {isCorrect ? '🎉 Correct!' : '❌ Incorrect'}
                {isCorrect && gameState.streak > 1 && (
                  <span className="ml-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    {gameState.streak} streak!
                  </span>
                )}
              </div>

              <button
                onClick={nextQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {gameState.currentQuestion + 1 >= questions.length ? 'View Results' : 'Next Question'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}