// Initialize Quiz App and Leaderboard
const quiz = new QuizApp();
const leaderboard = new LeaderboardManager();

// DOM Elements
const homeScreen = document.getElementById('homeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const leaderboardScreen = document.getElementById('leaderboardScreen');

// Home Screen Elements
const categoryContainer = document.getElementById('categoryContainer');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const startBtn = document.getElementById('startBtn');
const leaderboardBtn = document.getElementById('leaderboardBtn');

// Quiz Screen Elements
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const currentScoreEl = document.getElementById('currentScore');
const timeLeftEl = document.getElementById('timeLeft');
const timerDisplay = document.getElementById('timerDisplay');
const progressBar = document.getElementById('progressBar');
const categoryBadge = document.getElementById('categoryBadge');
const difficultyBadge = document.getElementById('difficultyBadge');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const nextBtn = document.getElementById('nextBtn');
const quitBtn = document.getElementById('quitBtn');

// Results Screen Elements
const resultIcon = document.getElementById('resultIcon');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const finalScore = document.getElementById('finalScore');
const correctAnswers = document.getElementById('correctAnswers');
const wrongAnswers = document.getElementById('wrongAnswers');
const reviewContainer = document.getElementById('reviewContainer');
const retryBtn = document.getElementById('retryBtn');
const newQuizBtn = document.getElementById('newQuizBtn');
const viewLeaderboardBtn = document.getElementById('viewLeaderboardBtn');

// Leaderboard Screen Elements
const leaderboardFilter = document.getElementById('leaderboardFilter');
const leaderboardBody = document.getElementById('leaderboardBody');
const closeLeaderboardBtn = document.getElementById('closeLeaderboardBtn');
const clearLeaderboardBtn = document.getElementById('clearLeaderboardBtn');

// State
let selectedCategory = null;
let selectedDifficulty = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    setupEventListeners();
});

// Render category cards
function renderCategories() {
    categoryContainer.innerHTML = '';
    
    Object.keys(quizData).forEach(categoryKey => {
        const category = quizData[categoryKey];
        const card = document.createElement('div');
        card.className = `category-card cursor-pointer p-6 rounded-xl border-2 border-transparent hover:border-${category.color}-500 transition duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-${category.color}-50`;
        card.dataset.category = categoryKey;
        
        card.innerHTML = `
            <div class="text-center">
                <i class="${category.icon} text-5xl text-${category.color}-600 mb-3"></i>
                <h3 class="text-xl font-bold text-gray-800">${category.name}</h3>
                <p class="text-sm text-gray-600 mt-2">
                    ${Object.keys(category.questions.easy).length} questions per level
                </p>
            </div>
        `;
        
        card.addEventListener('click', () => selectCategory(categoryKey, card));
        categoryContainer.appendChild(card);
    });
}

// Select category
// Select category
function selectCategory(categoryKey, cardElement) {
    // Remove previous selection
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to clicked card
    cardElement.classList.add('selected');
    selectedCategory = categoryKey;
    
    checkCanStart();
}

// Setup event listeners
function setupEventListeners() {
    // Difficulty selection
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove previous selection
            difficultyBtns.forEach(b => {
                b.classList.remove('selected');
            });
            
            // Add selection to clicked button
            btn.classList.add('selected');
            selectedDifficulty = btn.dataset.difficulty;
            
            checkCanStart();
        });
    });

    // ... rest of the event listeners remain the same
}

    // Start quiz
    startBtn.addEventListener('click', startQuiz);

    // Next question
    nextBtn.addEventListener('click', handleNextQuestion);

    // Quit quiz
    quitBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
            showScreen('home');
        }
    });

    // Retry quiz
    retryBtn.addEventListener('click', () => {
        startQuiz();
    });

    // New quiz
    newQuizBtn.addEventListener('click', () => {
        showScreen('home');
    });

    // Leaderboard buttons
    leaderboardBtn.addEventListener('click', showLeaderboard);
    viewLeaderboardBtn.addEventListener('click', showLeaderboard);
    closeLeaderboardBtn.addEventListener('click', () => showScreen('home'));

    // Leaderboard filter
    leaderboardFilter.addEventListener('change', renderLeaderboard);

    // Clear leaderboard
    clearLeaderboardBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear the entire leaderboard?')) {
            leaderboard.clearLeaderboard();
            renderLeaderboard();
        }
    });

// Check if can start quiz
function checkCanStart() {
    if (selectedCategory && selectedDifficulty) {
        startBtn.disabled = false;
    }
}

// Start quiz
function startQuiz() {
    quiz.init(selectedCategory, selectedDifficulty);
    showScreen('quiz');
    displayQuestion();
    startTimer();
}

// Display current question
function displayQuestion() {
    const question = quiz.getCurrentQuestion();
    const questionNumber = quiz.currentQuestionIndex + 1;
    const totalQuestions = quiz.questions.length;

    // Update UI
    currentQuestionEl.textContent = questionNumber;
    totalQuestionsEl.textContent = totalQuestions;
    currentScoreEl.textContent = quiz.score;
    questionText.textContent = question.question;
    categoryBadge.textContent = quizData[selectedCategory].name;
    difficultyBadge.textContent = selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1);

    // Update progress bar
    const progress = (questionNumber / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;

    // Set difficulty badge color
    const difficultyColors = {
        easy: 'bg-green-100 text-green-800',
        medium: 'bg-yellow-100 text-yellow-800',
        hard: 'bg-red-100 text-red-800'
    };
    difficultyBadge.className = `inline-block ${difficultyColors[selectedDifficulty]} text-sm font-semibold px-4 py-2 rounded-full ml-2`;

    // Render answer options
    answersContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn w-full text-left p-4 rounded-xl border-2 border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 transition duration-300 transform hover:scale-102';
        button.innerHTML = `
            <div class="flex items-center">
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold mr-4">
                    ${String.fromCharCode(65 + index)}
                </span>
                <span class="text-gray-800 font-medium">${option}</span>
            </div>
        `;
        button.addEventListener('click', () => selectAnswer(index, button));
        answersContainer.appendChild(button);
    });

    // Hide next button
    nextBtn.classList.add('hidden');
}

// Select answer
function selectAnswer(selectedIndex, button) {
    // Disable all answer buttons
    const allButtons = document.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => btn.classList.add('pointer-events-none'));

    // Stop timer
    clearInterval(quiz.timer);

    // Check answer
    const result = quiz.checkAnswer(selectedIndex);
    const correctIndex = quiz.getCurrentQuestion().correct;

    // Update UI based on answer
    allButtons.forEach((btn, index) => {
        if (index === correctIndex) {
            btn.classList.remove('border-gray-300');
            btn.classList.add('border-green-500', 'bg-green-50');
            btn.innerHTML = `
                <div class="flex items-center justify-between">
                    ${btn.querySelector('div').innerHTML}
                    <i class="fas fa-check-circle text-green-500 text-2xl"></i>
                </div>
            `;
        } else if (index === selectedIndex && !result.isCorrect) {
            btn.classList.remove('border-gray-300');
            btn.classList.add('border-red-500', 'bg-red-50');
            btn.innerHTML = `
                <div class="flex items-center justify-between">
                    ${btn.querySelector('div').innerHTML}
                    <i class="fas fa-times-circle text-red-500 text-2xl"></i>
                </div>
            `;
        }
    });

    // Update score display
    currentScoreEl.textContent = quiz.score;

    // Show next button or finish
    setTimeout(() => {
        if (!quiz.isQuizFinished()) {
            nextBtn.classList.remove('hidden');
        } else {
            finishQuiz();
        }
    }, 1000);
}

// Handle next question
function handleNextQuestion() {
    quiz.nextQuestion();
    if (!quiz.isQuizFinished()) {
        displayQuestion();
        startTimer();
    } else {
        finishQuiz();
    }
}

// Start timer
function startTimer() {
    quiz.resetTimer();
    updateTimerDisplay();

    quiz.timer = setInterval(() => {
        quiz.timeLeft--;
        updateTimerDisplay();

        // Add warning color when time is running out
        if (quiz.timeLeft <= 10) {
            timerDisplay.classList.add('timer-warning');
        } else {
            timerDisplay.classList.remove('timer-warning');
        }

        // Time's up
        if (quiz.timeLeft <= 0) {
            clearInterval(quiz.timer);
            handleTimeout();
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    timeLeftEl.textContent = quiz.timeLeft;
}

// Handle timeout
function handleTimeout() {
    // Auto-select wrong answer (mark as incorrect)
    quiz.userAnswers.push({
        question: quiz.getCurrentQuestion().question,
        options: quiz.getCurrentQuestion().options,
        userAnswer: -1, // No answer selected
        correctAnswer: quiz.getCurrentQuestion().correct,
        isCorrect: false,
        points: 0
    });

    // Disable all buttons and show correct answer
    const allButtons = document.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => btn.classList.add('pointer-events-none'));

    const correctIndex = quiz.getCurrentQuestion().correct;
    allButtons[correctIndex].classList.remove('border-gray-300');
    allButtons[correctIndex].classList.add('border-green-500', 'bg-green-50');
    allButtons[correctIndex].innerHTML = `
        <div class="flex items-center justify-between">
            ${allButtons[correctIndex].querySelector('div').innerHTML}
            <i class="fas fa-check-circle text-green-500 text-2xl"></i>
        </div>
    `;

    // Show timeout message
    const timeoutMsg = document.createElement('div');
    timeoutMsg.className = 'mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-800 font-semibold text-center';
    timeoutMsg.innerHTML = '<i class="fas fa-clock mr-2"></i>Time\'s up!';
    answersContainer.appendChild(timeoutMsg);

    // Show next button
    setTimeout(() => {
        if (!quiz.isQuizFinished()) {
            nextBtn.classList.remove('hidden');
        } else {
            finishQuiz();
        }
    }, 2000);
}

// Finish quiz and show results
function finishQuiz() {
    clearInterval(quiz.timer);
    
    const stats = quiz.getStats();
    const message = quiz.getPerformanceMessage();

    // Update results screen
    finalScore.textContent = stats.score;
    correctAnswers.textContent = stats.correct;
    wrongAnswers.textContent = stats.wrong;
    resultMessage.textContent = message;

    // Set icon based on performance
    const percentage = parseFloat(stats.percentage);
    if (percentage >= 75) {
        resultIcon.className = 'fas fa-trophy text-8xl text-yellow-500 mb-4';
        resultTitle.textContent = 'Congratulations! 🎉';
    } else if (percentage >= 50) {
        resultIcon.className = 'fas fa-medal text-8xl text-blue-500 mb-4';
        resultTitle.textContent = 'Good Job! 👏';
    } else {
        resultIcon.className = 'fas fa-sad-tear text-8xl text-gray-500 mb-4';
        resultTitle.textContent = 'Keep Practicing! 💪';
    }

    // Render review section
    renderReview();

    // Save to leaderboard
    const playerName = prompt('Enter your name for the leaderboard:', 'Anonymous') || 'Anonymous';
    leaderboard.saveScore(
        playerName,
        selectedCategory,
        selectedDifficulty,
        stats.score,
        stats.totalQuestions,
        stats.correct
    );

    showScreen('results');
}

// Render answer review
function renderReview() {
    reviewContainer.innerHTML = '';
    
    quiz.userAnswers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = `p-4 rounded-lg border-2 ${answer.isCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`;
        
        const userAnswerText = answer.userAnswer === -1 
            ? '<span class="text-red-600 font-semibold">No answer (Time out)</span>' 
            : `<span class="font-semibold">${answer.options[answer.userAnswer]}</span>`;
        
        reviewItem.innerHTML = `
            <div class="flex items-start justify-between mb-2">
                <span class="font-bold text-gray-700">Q${index + 1}.</span>
                <span class="${answer.isCorrect ? 'text-green-600' : 'text-red-600'} font-semibold">
                    ${answer.isCorrect ? '+' + answer.points + ' points' : '0 points'}
                </span>
            </div>
            <p class="font-semibold text-gray-800 mb-2">${answer.question}</p>
            <div class="space-y-1 text-sm">
                <p>Your answer: ${userAnswerText}</p>
                ${!answer.isCorrect ? `<p>Correct answer: <span class="text-green-600 font-semibold">${answer.options[answer.correctAnswer]}</span></p>` : ''}
            </div>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
}

// Show leaderboard
function showLeaderboard() {
    // Populate category filter
    leaderboardFilter.innerHTML = '<option value="all">All Categories</option>';
    Object.keys(quizData).forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = quizData[key].name;
        leaderboardFilter.appendChild(option);
    });

    renderLeaderboard();
    showScreen('leaderboard');
}

// Render leaderboard table
function renderLeaderboard() {
    const selectedFilter = leaderboardFilter.value;
    const entries = leaderboard.getLeaderboardByCategory(selectedFilter);

    leaderboardBody.innerHTML = '';

    if (entries.length === 0) {
        leaderboardBody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-8 text-gray-500">
                    <i class="fas fa-inbox text-4xl mb-2"></i>
                    <p>No scores yet. Be the first to play!</p>
                </td>
            </tr>
        `;
        return;
    }

    entries.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.className = index % 2 === 0 ? 'bg-gray-50' : 'bg-white';
        
        const rankClass = index === 0 ? 'text-yellow-600 font-bold' : 
                         index === 1 ? 'text-gray-400 font-bold' :
                         index === 2 ? 'text-orange-600 font-bold' : '';
        
        const rankIcon = index === 0 ? '<i class="fas fa-crown mr-1"></i>' :
                        index === 1 ? '<i class="fas fa-medal mr-1"></i>' :
                        index === 2 ? '<i class="fas fa-medal mr-1"></i>' : '';

        row.innerHTML = `
            <td class="py-3 px-4 ${rankClass}">${rankIcon}${index + 1}</td>
            <td class="py-3 px-4 font-semibold">${entry.playerName}</td>
            <td class="py-3 px-4">${entry.category}</td>
            <td class="py-3 px-4">
                <span class="inline-block px-3 py-1 rounded-full text-sm font-semibold
                    ${entry.difficulty === 'easy' ? 'bg-green-100 text-green-800' : 
                      entry.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'}">
                    ${entry.difficulty.charAt(0).toUpperCase() + entry.difficulty.slice(1)}
                </span>
            </td>
            <td class="py-3 px-4 font-bold text-indigo-600">${entry.score}</td>
            <td class="py-3 px-4 text-gray-600">${entry.date}</td>
        `;
        
        leaderboardBody.appendChild(row);
    });
}

// Show screen helper
// Show screen helper
function showScreen(screen) {
    homeScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    leaderboardScreen.classList.add('hidden');

    switch(screen) {
        case 'home':
            homeScreen.classList.remove('hidden');
            // Reset selections
            selectedCategory = null;
            selectedDifficulty = null;
            startBtn.disabled = true;
            
            // Remove all selection highlights
            document.querySelectorAll('.category-card').forEach(card => {
                card.classList.remove('selected');
            });
            difficultyBtns.forEach(btn => {
                btn.classList.remove('selected');
            });
            break;
        case 'quiz':
            quizScreen.classList.remove('hidden');
            break;
        case 'results':
            resultsScreen.classList.remove('hidden');
            break;
        case 'leaderboard':
            leaderboardScreen.classList.remove('hidden');
            break;
    }

    // Scroll to top
    window.scrollTo(0, 0);
}