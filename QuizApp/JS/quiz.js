// Quiz Logic Class
class QuizApp {
    constructor() {
        this.selectedCategory = null;
        this.selectedDifficulty = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.timer = null;
        this.timeLeft = 30; // seconds per question
        this.timePerQuestion = 30;
    }

    // Initialize quiz with selected category and difficulty
    init(category, difficulty) {
        this.selectedCategory = category;
        this.selectedDifficulty = difficulty;
        this.questions = this.getRandomQuestions(category, difficulty, 10);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.shuffleQuestions();
    }

    // Get random questions from selected category and difficulty
    getRandomQuestions(category, difficulty, count) {
        const categoryData = quizData[category];
        const questions = categoryData.questions[difficulty];
        
        // Shuffle and get random questions
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    // Shuffle questions order
    shuffleQuestions() {
        this.questions = this.questions.sort(() => 0.5 - Math.random());
    }

    // Get current question
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    // Check if answer is correct
    checkAnswer(selectedIndex) {
        const currentQuestion = this.getCurrentQuestion();
        const isCorrect = selectedIndex === currentQuestion.correct;
        
        // Calculate points based on time left and difficulty
        let points = 0;
        if (isCorrect) {
            const basePoints = {
                easy: 10,
                medium: 20,
                hard: 30
            };
            const timeBonus = Math.floor((this.timeLeft / this.timePerQuestion) * 10);
            points = basePoints[this.selectedDifficulty] + timeBonus;
            this.score += points;
        }

        // Store user answer
        this.userAnswers.push({
            question: currentQuestion.question,
            options: currentQuestion.options,
            userAnswer: selectedIndex,
            correctAnswer: currentQuestion.correct,
            isCorrect: isCorrect,
            points: points
        });

        return { isCorrect, points };
    }

    // Move to next question
    nextQuestion() {
        this.currentQuestionIndex++;
        this.resetTimer();
    }

    // Check if quiz is finished
    isQuizFinished() {
        return this.currentQuestionIndex >= this.questions.length;
    }

    // Reset timer
    resetTimer() {
        this.timeLeft = this.timePerQuestion;
    }

    // Get quiz statistics
    getStats() {
        const correct = this.userAnswers.filter(a => a.isCorrect).length;
        const wrong = this.userAnswers.length - correct;
        const percentage = (correct / this.userAnswers.length) * 100;
        
        return {
            totalQuestions: this.questions.length,
            correct: correct,
            wrong: wrong,
            score: this.score,
            percentage: percentage.toFixed(1)
        };
    }

    // Get performance message
    getPerformanceMessage() {
        const stats = this.getStats();
        const percentage = parseFloat(stats.percentage);
        
        if (percentage >= 90) return "Outstanding! You're a master! 🏆";
        if (percentage >= 75) return "Excellent work! Keep it up! 🌟";
        if (percentage >= 60) return "Good job! You're doing great! 👍";
        if (percentage >= 40) return "Not bad! Room for improvement! 📚";
        return "Keep practicing! You'll get better! 💪";
    }
}

// Leaderboard Manager
class LeaderboardManager {
    constructor() {
        this.storageKey = 'quizLeaderboard';
    }

    // Save score to leaderboard
    saveScore(playerName, category, difficulty, score, totalQuestions, correctAnswers) {
        const leaderboard = this.getLeaderboard();
        
        const entry = {
            id: Date.now(),
            playerName: playerName,
            category: quizData[category].name,
            categoryKey: category,
            difficulty: difficulty,
            score: score,
            totalQuestions: totalQuestions,
            correctAnswers: correctAnswers,
            percentage: ((correctAnswers / totalQuestions) * 100).toFixed(1),
            date: new Date().toLocaleDateString()
        };

        leaderboard.push(entry);
        
        // Sort by score (descending)
        leaderboard.sort((a, b) => b.score - a.score);
        
        // Keep only top 50 scores
        const topScores = leaderboard.slice(0, 50);
        
        localStorage.setItem(this.storageKey, JSON.stringify(topScores));
    }

    // Get all leaderboard entries
    getLeaderboard() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    }

    // Get leaderboard filtered by category
    getLeaderboardByCategory(category) {
        const leaderboard = this.getLeaderboard();
        if (category === 'all') return leaderboard;
        return leaderboard.filter(entry => entry.categoryKey === category);
    }

    // Clear leaderboard
    clearLeaderboard() {
        localStorage.removeItem(this.storageKey);
    }
}