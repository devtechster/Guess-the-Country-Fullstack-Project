# Guess-the-Country-Fullstack-Project
# Flag Master 🌍

A beautiful, interactive flag guessing game built with React, TypeScript, and Tailwind CSS. Test your knowledge of world flags across different regions and challenge yourself with timed questions!

![Flag Master Screenshot](https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=400&fit=crop&crop=center)

## ✨ Features

- **7 Geographic Categories**: World, Europe, Asia Pacific, Africa, Latin America, South Asia, and Middle East
- **200+ Countries**: Comprehensive flag database with high-quality flag images
- **Timed Challenges**: 30 seconds per question to keep the game exciting
- **Streak System**: Build streaks for bonus points and extra excitement
- **Smart Scoring**: Points based on speed, accuracy, and streak performance
- **Responsive Design**: Beautiful UI that works on desktop, tablet, and mobile
- **Production Ready**: Optimized performance and SEO-friendly

## 🎮 How to Play

1. **Choose a Category**: Select from 7 different geographic regions or play with all world flags
2. **Identify the Flag**: You have 30 seconds to identify which country the flag belongs to
3. **Build Streaks**: Answer consecutive questions correctly to earn streak bonuses
4. **Track Your Score**: Earn points based on speed and accuracy
5. **Challenge Yourself**: Try to achieve the highest score across different categories

## 🏆 Scoring System

- **Base Score**: 100 points for each correct answer
- **Time Bonus**: Up to 15 additional points based on remaining time
- **Streak Bonus**: Up to 100 additional points for consecutive correct answers
- **Performance Ratings**: From "Keep practicing!" to "Outstanding!" based on your final score

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/flag-master.git
cd flag-master
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Icons**: Lucide React for beautiful, consistent icons
- **Build Tool**: Vite for fast development and optimized builds
- **Code Quality**: ESLint for code linting and consistency

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── CategorySelector.tsx    # Category selection screen
│   └── GameScreen.tsx          # Main game interface
├── types/               # TypeScript type definitions
│   └── Country.ts       # Game-related types
├── utils/               # Utility functions
│   ├── countries.ts     # Country data and helper functions
│   └── gameLogic.ts     # Game logic and scoring
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🌍 Country Data

The game includes comprehensive flag data for:

- **Europe**: 40 countries including major and minor European nations
- **Middle East**: 18 countries covering the Middle Eastern region
- **Africa**: 46 countries representing the entire African continent
- **Latin America**: 32 countries from Central and South America plus the Caribbean
- **South Asia**: 8 countries from the Indian subcontinent
- **Asia Pacific**: 30 countries from East Asia, Southeast Asia, and Oceania
- **World**: All countries combined for the ultimate challenge

## 🎨 Design Features

- **Modern Gradient Backgrounds**: Beautiful blue-to-purple gradients
- **Glassmorphism Effects**: Frosted glass-style UI elements
- **Smooth Animations**: Hover effects and transitions throughout
- **Responsive Layout**: Optimized for all screen sizes
- **Accessibility**: Proper contrast ratios and keyboard navigation

## 🔧 Configuration

Game settings can be modified in `src/utils/gameLogic.ts`:

```typescript
export const GAME_CONFIG = {
  QUESTIONS_PER_GAME: 10,    // Number of questions per game
  TIME_PER_QUESTION: 30      // Seconds per question
};
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License

MIT License

Copyright (c) 2025 Devtechster

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell     
copies of the Software, and to permit persons to whom the Software is         
furnished to do so, subject to the following conditions:                      

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.                               

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR    
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,      
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE   
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER        
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.


## 🙏 Acknowledgments

- Flag images provided by [FlagCDN](https://flagcdn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)


**Happy flag guessing! 🎯**
